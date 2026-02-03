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

export interface UploadedFile {
  id: string;
  file: File;
  fileName: string;
  fileSize: string;
  dateTime: string;
  fileType: string;
}

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

  @Output() filesChange = new EventEmitter<UploadedFile[]>();
  @Output() fileDownload = new EventEmitter<UploadedFile>();
  @Output() fileDelete = new EventEmitter<UploadedFile>();

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  uploadedFiles: UploadedFile[] = [];
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
      this.addFiles(Array.from(input.files));
    }
    input.value = '';
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
      this.addFiles(Array.from(files));
    }
  }

  onDownload(file: UploadedFile) {
    this.fileDownload.emit(file);
  }

  onDelete(file: UploadedFile) {
    this.uploadedFiles = this.uploadedFiles.filter((f) => f.id !== file.id);
    this.fileDelete.emit(file);
    this.filesChange.emit(this.uploadedFiles);
  }

  getIconType(file: UploadedFile): string {
    const ext = file.fileName.split('.').pop()?.toLowerCase() || '';
    if (ext === 'pdf') return 'pdf';
    if (['doc', 'docx'].includes(ext)) return 'doc';
    if (['xls', 'xlsx'].includes(ext)) return 'xls';
    if (['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext)) return 'image';
    return 'file';
  }

  private addFiles(files: File[]) {
    const newFiles = files.map((file) => this.createUploadedFile(file));
    this.uploadedFiles = [...this.uploadedFiles, ...newFiles];
    this.filesChange.emit(this.uploadedFiles);
  }

  private createUploadedFile(file: File): UploadedFile {
    return {
      id: this.generateId(),
      file: file,
      fileName: file.name,
      fileSize: this.formatFileSize(file.size),
      dateTime: this.formatDateTime(new Date()),
      fileType: file.name.split('.').pop()?.toLowerCase() || '',
    };
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  private formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + sizes[i];
  }

  private formatDateTime(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
}
