import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSize, BUTTON_SIZE_MAP } from './button-container.model';
import { IconComponent, IconData } from '../../icon/icon.component';

export interface ButtonContainerData {
  size?: ButtonSize | '';
  content?: string;
  fontSize?: string;
  leftIcon?: string;
  leftIconData?: IconData[];
  rightIcon?: string;
  rightIconData?: IconData[];
  color?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius: '8px';
  width?: string;
  height: '36px';
  padding?: string;
  marginLeft?: string;
  marginRight?: string;
}

@Component({
  selector: 'app-button-container',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.scss'],
})
export class ButtonContainerComponent {
  @Input() buttonData?: ButtonContainerData;

  @Input() size: ButtonSize | '' = 'md';
  @Input() content?: string;

  @Input() fontSize?: string;

  @Input() leftIcon?: string;
  @Input() leftIconData?: IconData[];

  @Input() rightIcon?: string;
  @Input() rightIconData?: IconData[];

  @Input() color?: string;
  @Input() backgroundColor?: string;
  @Input() border?: string;
  @Input() borderRadius = '8px';
  @Input() width?: string;
  @Input() height = '36px';
  @Input() padding?: string;
  @Input() marginLeft?: string;
  @Input() marginRight?: string;

  @Output() buttonClick = new EventEmitter<any>();

  get sizeStyle() {
    return this.size
      ? BUTTON_SIZE_MAP[this.size as ButtonSize]
      : {
          minWidth: 'auto',
          minHeight: 'auto',
          fontSize: 'inherit',
          iconSize: '20px',
          contentWidth: 'auto',
          contentHeight: 'auto',
        };
  }

  handleClick(): any {
    this.buttonClick.emit();
  }
}
