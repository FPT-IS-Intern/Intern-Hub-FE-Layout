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
  selector: 'app-file-upload-dropzone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-upload-dropzone.component.html',
  styleUrl: './file-upload-dropzone.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadDropzoneComponent {
  @Input() label: string = 'Thêm file bài học';
  @Input() buttonText: string = 'Tải lên';
  @Input() maxSize: string = '10MB';
  @Input() acceptFormats: string = '.docx,.xlsx,.png,.jpg,.jpeg,.pdf';
  @Input() helperText: string = '';

  @Output() fileSelected = new EventEmitter<File>();
  @Output() filesSelected = new EventEmitter<File[]>();

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  isDragging = false;

  get displayHelperText(): string {
    if (this.helperText) return this.helperText;
    return `Dung lượng tối đa ${this.maxSize}(${this.acceptFormats.replace(/\./g, '').split(',').join(', ')}...)`;
  }

  onButtonClick() {
    this.fileInput.nativeElement.click();
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      if (input.files.length === 1) {
        this.fileSelected.emit(input.files[0]);
      } else {
        this.filesSelected.emit(Array.from(input.files));
      }
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      if (files.length === 1) {
        this.fileSelected.emit(files[0]);
      } else {
        this.filesSelected.emit(Array.from(files));
      }
    }
  }
}
