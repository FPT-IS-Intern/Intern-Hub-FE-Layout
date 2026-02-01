import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent, HeaderData } from '@lib/layouts/header/header.component';
import { SidebarComponent, SidebarData } from '@lib/layouts/sidebar/sidebar.component';

@Component({
  selector: 'app-layout-preview',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, SidebarComponent],
  template: `
    <div class="demo-header">
      <h2>Layout Components</h2>
      <p>Header and Sidebar components for building page layouts</p>
    </div>

    <!-- Header Preview -->
    <div class="preview-section">
      <div class="preview-header">
        <h3>Header Component</h3>
      </div>
      <div class="preview-body" style="flex-direction: column; align-items: stretch;">
        <app-header-component [data]="headerData"></app-header-component>
      </div>
    </div>

    <div class="controls-panel">
      <h3>Header Controls</h3>
      <div class="control-group">
        <div class="control-item">
          <label>User Name</label>
          <input type="text" [(ngModel)]="headerData.userName">
        </div>
        <div class="control-item">
          <label>Logo URL</label>
          <input type="text" [(ngModel)]="headerData.logo">
        </div>
        <div class="control-item">
          <label>User Icon</label>
          <select [(ngModel)]="headerData.userIcon">
            <option value="dsi-user-01-line">User Line</option>
            <option value="dsi-user-01-solid">User Solid</option>
            <option value="dsi-user-circle-line">User Circle</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Sidebar Preview -->
    <div class="preview-section">
      <div class="preview-header">
        <h3>Sidebar Component</h3>
      </div>
      <div class="preview-body" style="height: 400px; align-items: flex-start; justify-content: flex-start;">
        <app-sidebar [data]="sidebarData"></app-sidebar>
      </div>
    </div>

    <div class="controls-panel">
      <h3>Sidebar Controls</h3>
      <div class="control-group">
        <div class="control-item">
          <label>Background Color</label>
          <input type="color" [(ngModel)]="sidebarData.backgroundColor" (ngModelChange)="updateSidebar()">
        </div>
        <div class="control-item">
          <label>Number of Menu Items</label>
          <select [(ngModel)]="menuItemCount" (ngModelChange)="updateMenuItems()">
            <option [value]="3">3 Items</option>
            <option [value]="5">5 Items</option>
            <option [value]="7">7 Items</option>
          </select>
        </div>
      </div>
    </div>

    <div class="event-log">
      <h4>Event Log</h4>
      @for (log of eventLogs; track log) {
        <div class="log-entry">
          <span class="timestamp">{{ log.time }}</span>
          {{ log.message }}
        </div>
      }
      @empty {
        <div class="log-entry" style="color: #6b7280;">No events yet. Interact with components...</div>
      }
    </div>
  `,
  styles: [`
    .preview-body {
      background: var(--neutral-300) !important;
    }
  `]
})
export class LayoutPreviewComponent {
  eventLogs: { time: string; message: string }[] = [];
  menuItemCount = 5;

  headerData: HeaderData = {
    headerItems: [
      { icon: 'dsi-notification-line', content: 'Notifications', badge: '3' },
      { icon: 'dsi-settings-line', content: 'Settings' },
    ],
    userName: 'John Doe',
    userIcon: 'dsi-user-01-line',
    dropdownIcon: 'dsi-arrow-down-solid',
    logo: 'https://via.placeholder.com/120x40?text=Logo',
  };

  sidebarData: SidebarData = {
    menuItems: this.generateMenuItems(5),
    backgroundColor: '#1e293b',
  };

  generateMenuItems(count: number) {
    const icons = ['dsi-home-line', 'dsi-user-line', 'dsi-settings-line', 'dsi-file-line', 'dsi-chart-line', 'dsi-mail-line', 'dsi-calendar-line'];
    const names = ['Dashboard', 'Users', 'Settings', 'Documents', 'Analytics', 'Messages', 'Calendar'];
    return Array.from({ length: count }, (_, i) => ({
      iconLeft: icons[i % icons.length],
      content: names[i % names.length],
      url: '#',
    }));
  }

  updateMenuItems() {
    this.sidebarData = {
      ...this.sidebarData,
      menuItems: this.generateMenuItems(this.menuItemCount),
    };
    this.logEvent(`Menu items updated to ${this.menuItemCount}`);
  }

  updateSidebar() {
    this.sidebarData = { ...this.sidebarData };
    this.logEvent('Sidebar background color changed');
  }

  logEvent(message: string) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    this.eventLogs.unshift({ time, message });
    if (this.eventLogs.length > 10) this.eventLogs.pop();
  }
}
