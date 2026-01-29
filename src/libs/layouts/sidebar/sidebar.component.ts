import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionalLabelComponent } from '../../shared/components/functional-label/functional-label.component';

export interface SidebarItem {
  icon: string;
  content: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FunctionalLabelComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() menuItems: SidebarItem[] = [];
}
