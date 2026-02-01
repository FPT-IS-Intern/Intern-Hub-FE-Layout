import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSize, BUTTON_SIZE_MAP } from './button-container.model';

@Component({
  selector: 'app-button-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.scss'],
})
export class ButtonContainerComponent {
  @Input() size: ButtonSize | '' = 'md';
  @Input() content = '';

  @Input() fontSize?: string;

  @Input() leftIcon?: string;
  @Input() rightIcon?: string;

  @Input() color = 'var(--brand-100)';
  @Input() backgroundColor = 'var(--utility-900)';
  @Input() borderColor = 'var(--brand-100)';
  @Input() borderRadius?: string;
  @Input() width?: string;

  @Output() buttonClick = new EventEmitter<any>();

  get sizeStyle() {
    return this.size ? BUTTON_SIZE_MAP[this.size as ButtonSize] : {
      minWidth: 'auto',
      minHeight: 'auto',
      fontSize: 'inherit',
      iconSize: '20px',
      contentWidth: 'auto',
      contentHeight: 'auto'
    };
  }

  handleClick(): any {
    this.buttonClick.emit();
  }
}
