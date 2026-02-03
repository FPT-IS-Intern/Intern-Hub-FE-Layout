import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() width: string = '800px';
  @Input() minHeight: string = '300px';
  @Input() isOpen: boolean = false;
  @Input() theme: 'default' | 'white' = 'default';

  @Output() close = new EventEmitter<void>();

  onOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.close.emit();
    }
  }

  onCloseClick() {
    this.close.emit();
  }
}
