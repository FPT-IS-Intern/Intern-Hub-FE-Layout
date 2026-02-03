import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent, IconData } from '../icon/icon.component';

@Component({
  selector: 'app-functional-label',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './functional-label.component.html',
  styleUrls: ['./functional-label.component.scss'],
})
export class FunctionalLabelComponent {
  @Input() iconLeft?: IconData | string;
  @Input() iconRight?: IconData | string;

  @Input() colorIconLeft?: string;
  @Input() colorIconRight?: string;
  @Input() widthIconLeft?: string = '20px';
  @Input() heightIconLeft?: string = '20px';
  @Input() widthIconRight?: string = '20px';
  @Input() heightIconRight?: string = '20px';

  @Input() colorIconLeftHover?: string;
  @Input() colorIconRightHover?: string;
  @Input() colorContentHover?: string;
  @Input() backgroundColorHover?: string;
  @Input() borderRadiusHover?: string;

  @Input() content?: string;
  @Input() fontSizeContent?: string = '14px';
  @Input() colorContent?: string;
  @Input() widthContent?: string = '100%';
  @Input() heightContent?: string = '100%';

  @Input() backgroundColor?: string;
  @Input() borderRadius?: string;
  @Input() width?: string;
  @Input() height?: string;

  @Input() routerLink?: string;
  @Input() isSidebarExpanded: boolean = false;
  @Output() clicked = new EventEmitter<Event>();

  get currentBackgroundColor(): string | undefined {
    return this.backgroundColor;
  }

  get currentBorderRadius(): string | undefined {
    return this.borderRadius;
  }

  get currentColorContent(): string | undefined {
    return this.colorContent;
  }

  get hasIconLeft(): boolean {
    return !!this.iconLeft;
  }

  get hasIconRight(): boolean {
    return !!this.iconRight;
  }

  get iconLeftData(): IconData | undefined {
    if (!this.iconLeft) return undefined;

    const color = this.isSidebarExpanded
      ? this.colorIconLeftHover || this.colorIconLeft
      : this.colorIconLeft;

    if (typeof this.iconLeft === 'string') {
      return {
        icon: this.iconLeft,
        colorIcon: color,
        width: this.widthIconLeft,
        height: this.heightIconLeft,
      };
    }
    return {
      ...this.iconLeft,
      colorIcon: color || this.iconLeft.colorIcon,
    };
  }

  get iconRightData(): IconData | undefined {
    if (!this.iconRight) return undefined;

    const color = this.isSidebarExpanded
      ? this.colorIconRightHover || this.colorIconRight
      : this.colorIconRight;

    if (typeof this.iconRight === 'string') {
      return {
        icon: this.iconRight,
        colorIcon: color,
        width: this.widthIconRight,
        height: this.heightIconRight,
      };
    }
    return {
      ...this.iconRight,
      colorIcon: color || this.iconRight.colorIcon,
    };
  }

  handleClick(event: Event): void {
    if (!this.routerLink) {
      event.preventDefault();
      this.clicked.emit(event);
    }
  }
}
