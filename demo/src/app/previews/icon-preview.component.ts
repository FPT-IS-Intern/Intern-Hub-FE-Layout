import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent, IconData } from '@lib/shared/components/icon/icon.component';
import { FunctionalLabelComponent } from '@lib/shared/components/functional-label/functional-label.component';

@Component({
  selector: 'app-icon-preview',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent, FunctionalLabelComponent],
  template: `
    <div class="demo-header">
      <h2>Icons & Labels</h2>
      <p>Icon component and Functional Label for display elements</p>
    </div>

    <!-- Icon Preview -->
    <div class="preview-section">
      <div class="preview-header">
        <h3>Icon Component</h3>
      </div>
      <div class="preview-body">
        <div style="display: flex; gap: 24px; align-items: center;">
          <app-icon 
            [icon]="iconName" 
            [colorIcon]="iconColor" 
            [width]="iconWidth" 
            [height]="iconHeight"
            [colorIconHover]="iconHoverColor"
            (clicked)="onIconClick($event)">
          </app-icon>
          
          <div style="display: flex; gap: 16px;">
            @for (icon of sampleIcons; track icon) {
              <app-icon 
                [icon]="icon" 
                [colorIcon]="iconColor" 
                width="24px" 
                height="24px"
                (clicked)="onIconClick($event)">
              </app-icon>
            }
          </div>
        </div>
      </div>
    </div>

    <div class="controls-panel">
      <h3>Icon Controls</h3>
      <div class="control-group">
        <div class="control-item">
          <label>Icon Class</label>
          <select [(ngModel)]="iconName">
            <option value="dsi-home-line">Home Line</option>
            <option value="dsi-home-solid">Home Solid</option>
            <option value="dsi-user-01-line">User Line</option>
            <option value="dsi-user-01-solid">User Solid</option>
            <option value="dsi-settings-line">Settings Line</option>
            <option value="dsi-settings-solid">Settings Solid</option>
            <option value="dsi-star-line">Star Line</option>
            <option value="dsi-star-solid">Star Solid</option>
            <option value="dsi-heart-line">Heart Line</option>
            <option value="dsi-heart-solid">Heart Solid</option>
          </select>
        </div>
        <div class="control-item">
          <label>Icon Color</label>
          <input type="color" [(ngModel)]="iconColor">
        </div>
        <div class="control-item">
          <label>Hover Color</label>
          <input type="color" [(ngModel)]="iconHoverColor">
        </div>
        <div class="control-item">
          <label>Width</label>
          <select [(ngModel)]="iconWidth">
            <option value="16px">16px</option>
            <option value="20px">20px</option>
            <option value="24px">24px</option>
            <option value="32px">32px</option>
            <option value="48px">48px</option>
          </select>
        </div>
        <div class="control-item">
          <label>Height</label>
          <select [(ngModel)]="iconHeight">
            <option value="16px">16px</option>
            <option value="20px">20px</option>
            <option value="24px">24px</option>
            <option value="32px">32px</option>
            <option value="48px">48px</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Functional Label Preview -->
    <div class="preview-section">
      <div class="preview-header">
        <h3>Functional Label Component</h3>
      </div>
      <div class="preview-body">
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <app-functional-label
            [iconLeft]="labelIconLeft"
            [iconRight]="labelIconRight"
            [content]="labelContent"
            [colorIconLeft]="labelIconColor"
            [colorContent]="labelTextColor">
          </app-functional-label>
        </div>
      </div>
    </div>

    <div class="controls-panel">
      <h3>Functional Label Controls</h3>
      <div class="control-group">
        <div class="control-item">
          <label>Content</label>
          <input type="text" [(ngModel)]="labelContent">
        </div>
        <div class="control-item">
          <label>Left Icon</label>
          <select [(ngModel)]="labelIconLeft">
            <option value="">None</option>
            <option value="dsi-home-line">Home</option>
            <option value="dsi-user-01-line">User</option>
            <option value="dsi-star-solid">Star</option>
            <option value="dsi-check-line">Check</option>
          </select>
        </div>
        <div class="control-item">
          <label>Right Icon</label>
          <select [(ngModel)]="labelIconRight">
            <option value="">None</option>
            <option value="dsi-arrow-right-line">Arrow Right</option>
            <option value="dsi-chevron-right-line">Chevron Right</option>
            <option value="dsi-external-link-line">External Link</option>
          </select>
        </div>
        <div class="control-item">
          <label>Icon Color</label>
          <input type="color" [(ngModel)]="labelIconColor">
        </div>
        <div class="control-item">
          <label>Text Color</label>
          <input type="color" [(ngModel)]="labelTextColor">
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
        <div class="log-entry" style="color: #6b7280;">No events yet. Click an icon...</div>
      }
    </div>
  `
})
export class IconPreviewComponent {
  eventLogs: { time: string; message: string }[] = [];
  
  // Icon controls
  iconName = 'dsi-star-solid';
  iconColor = '#1677ff';
  iconHoverColor = '#ff6b6b';
  iconWidth = '32px';
  iconHeight = '32px';
  
  sampleIcons = ['dsi-home-line', 'dsi-user-01-line', 'dsi-settings-line', 'dsi-heart-solid', 'dsi-star-solid'];
  
  // Functional Label controls
  labelContent = 'Dashboard';
  labelIconLeft = 'dsi-home-line';
  labelIconRight = 'dsi-arrow-right-line';
  labelIconColor = '#1677ff';
  labelTextColor = '#262626';

  onIconClick(event: Event) {
    this.logEvent('Icon clicked');
  }

  logEvent(message: string) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    this.eventLogs.unshift({ time, message });
    if (this.eventLogs.length > 10) this.eventLogs.pop();
  }
}
