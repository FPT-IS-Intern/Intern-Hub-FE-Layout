import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-button.component.html',
  styleUrl: './upload-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadButtonComponent {
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() showTooltip: boolean = false;
  @Input() tooltipText: string = '';
  @Input() buttonText: string = 'Tải ảnh lên';
  @Input() acceptFormats: string = '.png,.jpeg,.jpg';
  @Input() helperText: string = 'Định dạng .png, .jpeg, .jpg';

  @Output() fileSelected = new EventEmitter<File>();

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  onButtonClick() {
    this.fileInput.nativeElement.click();
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileSelected.emit(input.files[0]);
    }
  }
}
