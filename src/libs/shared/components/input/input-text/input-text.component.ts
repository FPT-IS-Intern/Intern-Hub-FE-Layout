import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input() headerInput: string = '';
  @Input() placeholder: string = '';
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() width: string = '100%';
  @Input() maxLength: number = 0; // 0 = no limit
  @Input() showLimit: boolean = false;
  @Input() icon: string = '';
  @Input() typeInput: string = 'text';

  // Customization
  @Input() placeholderColor: string = '';
  @Input() borderColor: string = '';
  @Input() borderColorHover: string = '';
  @Input() borderRadius: string = '';
  @Input() padding: string = '';
  @Input() height: string = '';
  @Input() fontSize: string = '';
  @Input() fontWeight: string = '';
  @Input() backgroundColor: string = '';

  @Output() valueChange = new EventEmitter<string>();
  @Output() iconClick = new EventEmitter<void>();

  private _value: string = '';

  onIconClick(): void {
    this.iconClick.emit();
  }

  @Input()
  set value(val: string) {
    this._value = val || '';
  }

  get value(): string {
    return this._value;
  }

  get currentLength(): number {
    return this._value?.length || 0;
  }

  get limit(): string {
    if (!this.showLimit || this.maxLength <= 0) return '';
    return `${this.currentLength}/${this.maxLength}`;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let newValue = input.value;

    // Enforce maxLength if set
    if (this.maxLength > 0 && newValue.length > this.maxLength) {
      newValue = newValue.substring(0, this.maxLength);
      input.value = newValue;
    }

    this._value = newValue;
    this.valueChange.emit(this._value);
  }
}
