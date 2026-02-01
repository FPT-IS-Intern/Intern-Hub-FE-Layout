import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionalLabelComponent } from '../../shared/components/functional-label/functional-label.component';
import { IconData } from '../../shared/components/icon/icon.component';

export interface SidebarItem {
  iconLeft?: IconData | string;
  iconRight?: IconData | string;
  content: string;
  url?: string;
  colorIconLeft?: string;
  colorIconLeftHover?: string;
  colorIconRight?: string;
  colorIconRightHover?: string;
  colorContent?: string;
  colorContentHover?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  borderRadius?: string;
  borderRadiusHover?: string;
  width?: string;
  height?: string;
}

export interface SidebarData {
  menuItems: SidebarItem[];
  backgroundColor?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FunctionalLabelComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() data: SidebarData = { menuItems: [] };

  isSidebarExpanded = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isSidebarExpanded = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isSidebarExpanded = false;
  }

  onMenuItemClick(item: SidebarItem, event: Event): void {
    console.log('Menu item clicked:', item, event);
  }
}
