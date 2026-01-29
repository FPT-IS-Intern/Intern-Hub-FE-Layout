import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-calendar.component.html',
  styleUrls: ['./input-calendar.component.scss'],
})
export class InputCalendarComponent {
  @Input() headerInput: string = '';
  @Input() placeholder: string = 'dd/mm/yyyy';
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() width: string = '100%';
  
  @Output() valueChange = new EventEmitter<string>();
  
  @ViewChild('hiddenDateInput') hiddenDateInput!: ElementRef<HTMLInputElement>;
  
  displayValue: string = '';
  private _value: string = '';
  
  @Input()
  set value(val: string) {
    this._value = val;
    this.displayValue = this.formatToDisplay(val);
  }
  
  get value(): string {
    return this._value;
  }
  
  // Convert ISO format (yyyy-mm-dd) to display format (dd/mm/yyyy)
  formatToDisplay(isoDate: string): string {
    if (!isoDate) return '';
    const parts = isoDate.split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return isoDate;
  }
  
  // Convert display format (dd/mm/yyyy) to ISO format (yyyy-mm-dd)
  formatToISO(displayDate: string): string {
    if (!displayDate) return '';
    const parts = displayDate.split('/');
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return displayDate;
  }
  
  // Handle text input with auto-formatting
  onDisplayInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replaceAll(/[^\d/]/g, '');
    
    // Auto-insert slashes at positions 2 and 5
    const parts = value.split('/');
    if (parts[0] && parts[0].length >= 2 && parts.length === 1) {
      value = parts[0].substring(0, 2) + '/' + parts[0].substring(2);
    }
    if (value.length >= 5 && value.split('/').length === 2 && !value.endsWith('/')) {
      const newParts = value.split('/');
      if (newParts[1] && newParts[1].length >= 2) {
        value = newParts[0] + '/' + newParts[1].substring(0, 2) + '/' + newParts[1].substring(2);
      }
    }
    
    // Limit to dd/mm/yyyy format
    if (value.length > 10) {
      value = value.substring(0, 10);
    }
    
    this.displayValue = value;
    
    // Only emit if complete date
    if (value.length === 10) {
      const isoValue = this.formatToISO(value);
      this._value = isoValue;
      this.valueChange.emit(isoValue);
    }
  }
  
  // Open native date picker
  openDatePicker(): void {
    if (!this.readonly && this.hiddenDateInput) {
      this.hiddenDateInput.nativeElement.showPicker();
    }
  }
  
  // Handle date picker selection
  onDatePickerChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this._value = input.value;
    this.displayValue = this.formatToDisplay(input.value);
    this.valueChange.emit(this._value);
  }
}