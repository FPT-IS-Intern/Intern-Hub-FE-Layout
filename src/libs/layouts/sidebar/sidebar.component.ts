import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionalLabelComponent } from '../../shared/components/functional-label/functional-label.component';
import { ButtonContainerComponent } from '../../shared/components/button/button-container/button-container.component';
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
  collapseIcon?: string;
  expandIcon?: string;
  toggleButtonBackgroundColor?: string;
  closeButtonBackgroundColor?: string;
  toggleButtonIconColor?: string;
  toggleButtonSize?: string;
  toggleButtonBorderRadius?: string;
  toggleButtonPadding?: string;
  toggleButtonWidth?: string;
  toggleButtonHeight?: string;
  closeButtonMarginRight?: string;
  closeButtonMarginLeft?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FunctionalLabelComponent, ButtonContainerComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() data: SidebarData = { menuItems: [] };
  @Input() sidebarWidthCollapse: string = '59px';
  @Input() sidebarWidthExpand: string = '227px';
  @Input() isSidebarExpanded = false;

  @Input() leftIcon?: string;
  @Input() rightIcon?: string;

  @Output() sidebarToggled = new EventEmitter<boolean>();

  @Input() toggleButtonIconData?: IconData[];

  @Input() closeButtonIconData?: IconData[];

  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    this.sidebarToggled.emit(this.isSidebarExpanded);
  }

  onMenuItemClick(item: SidebarItem, event: Event): void {
    console.log('Menu item clicked:', item, event);
  }
}
