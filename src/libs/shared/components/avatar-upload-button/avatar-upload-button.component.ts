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

export interface AvatarUploadedFile {
  id: string;
  file: File;
  fileName: string;
  previewUrl: string | null;
}

@Component({
  selector: 'app-avatar-upload-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar-upload-button.component.html',
  styleUrl: './avatar-upload-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarUploadButtonComponent {
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() showTooltip: boolean = false;
  @Input() tooltipText: string = '';
  @Input() buttonText: string = 'Tải file lên';
  @Input() acceptFormats: string = '.png,.jpeg,.jpg';
  @Input() helperText: string = 'Định dạng .png, .jpeg, .jpg';

  @Output() fileChange = new EventEmitter<AvatarUploadedFile | null>();

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  uploadedFile: AvatarUploadedFile | null = null;

  onButtonClick() {
    this.fileInput.nativeElement.click();
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.uploadedFile = this.createAvatarUploadedFile(file);
      this.fileChange.emit(this.uploadedFile);
    }
    input.value = '';
  }

  onRemove() {
    if (this.uploadedFile?.previewUrl) {
      URL.revokeObjectURL(this.uploadedFile.previewUrl);
    }
    this.uploadedFile = null;
    this.fileChange.emit(null);
  }

  private createAvatarUploadedFile(file: File): AvatarUploadedFile {
    const isImage = file.type.startsWith('image/');
    return {
      id: this.generateId(),
      file: file,
      fileName: file.name,
      previewUrl: isImage ? URL.createObjectURL(file) : null,
    };
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}
