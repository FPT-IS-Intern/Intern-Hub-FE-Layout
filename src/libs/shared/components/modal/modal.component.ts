import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Input() title = '';
  @Input() isOpen = false;

  // optional props (giữ nguyên nếu lib bạn đang dùng)
  @Input() maxWidth = '600px';
  @Input() minHeight = 'auto';
  @Input() theme: 'white' | 'default' = 'default';

  @Output() close = new EventEmitter<void>();

  onCloseClick(): void {
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close.emit();
    }
  }
}
