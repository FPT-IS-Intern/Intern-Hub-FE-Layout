import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface IconData {
  icon: string;
  colorIcon?: string;
  routerLink?: string;
  width?: string;
  height?: string;
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
    if (this.iconData?.icon) {
      return this.iconData.icon;
    }
    return this.icon || '';
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

  handleClick(event: Event): void {
    if (!this.iconRouterLink) {
      event.preventDefault();
      this.clicked.emit(event);
    }
  }
}
