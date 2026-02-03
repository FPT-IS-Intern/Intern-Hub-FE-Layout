import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface IconData {
  icon: string;
  colorIcon?: string;
  backgroundColorHover?: string;
  routerLink?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
}

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() iconData?: IconData;
  @Input() icon?: string;
  @Input() colorIcon?: string;
  @Input() routerLink?: string;
  @Input() width?: string = '20px';
  @Input() height?: string = '20px';
  @Input() colorIconHover?: string;
  @Input() backgroundColorHover?: string;

  @Output() clicked = new EventEmitter<Event>();

  get iconClass(): string {
    const iconName = this.iconData?.icon || this.icon || '';
    return iconName.includes('dsi') ? iconName : `dsi ${iconName}`;
  }

  get iconColor(): string | undefined {
    return this.iconData?.colorIcon || this.colorIcon;
  }

  get iconWidth(): string {
    return this.iconData?.width || this.width || '20px';
  }

  get iconHeight(): string {
    return this.iconData?.height || this.height || '20px';
  }

  get iconRouterLink(): string | undefined {
    return this.iconData?.routerLink || this.routerLink;
  }

  get backgroundColor(): string | undefined {
    return this.iconData?.backgroundColor;
  }

  handleClick(event: Event): void {
    if (!this.iconRouterLink) {
      event.preventDefault();
      this.clicked.emit(event);
    }
  }
}
