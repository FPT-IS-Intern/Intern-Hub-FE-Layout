import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonContainerComponent } from '@lib/shared/components/button/button-container/button-container.component';
import { LabelButtonComponent } from '@lib/shared/components/button/label-button/label-button.component';
import { ButtonSize } from '@lib/shared/components/button/button-container/button-container.model';

@Component({
  selector: 'app-button-preview',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonContainerComponent, LabelButtonComponent],
  template: `
    <div class="demo-header">
      <h2>Button Components</h2>
      <p>ButtonContainer and LabelButton for interactive actions</p>
    </div>

    <!-- Button Container Preview -->
    <div class="preview-section">
      <div class="preview-header">
        <h3>Button Container Component</h3>
      </div>
      <div class="preview-body">
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <app-button-container
            [size]="buttonSize"
            [content]="buttonContent"
            [leftIcon]="buttonLeftIcon"
            [rightIcon]="buttonRightIcon"
            [color]="buttonTextColor"
            [backgroundColor]="buttonBgColor"
            [borderColor]="buttonBorderColor"
            [borderRadius]="buttonBorderRadius"
            [width]="buttonWidth"
            (buttonClick)="onButtonClick()">
          </app-button-container>

          <!-- Size variants -->
          @for (size of buttonSizes; track size) {
            <app-button-container
              [size]="size"
              [content]="size.toUpperCase()"
              [color]="buttonTextColor"
              [backgroundColor]="buttonBgColor"
              [borderColor]="buttonBorderColor"
              (buttonClick)="onButtonClick()">
            </app-button-container>
          }
        </div>
      </div>
    </div>

    <div class="controls-panel">
      <h3>Button Container Controls</h3>
      <div class="control-group">
        <div class="control-item">
          <label>Content</label>
          <input type="text" [(ngModel)]="buttonContent">
        </div>
        <div class="control-item">
          <label>Size</label>
          <select [(ngModel)]="buttonSize">
            <option value="">None (Auto)</option>
            <option value="xs">Extra Small</option>
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </div>
        <div class="control-item">
          <label>Left Icon</label>
          <select [(ngModel)]="buttonLeftIcon">
            <option value="">None</option>
            <option value="dsi-plus-line">Plus</option>
            <option value="dsi-check-line">Check</option>
            <option value="dsi-download-line">Download</option>
            <option value="dsi-upload-line">Upload</option>
          </select>
        </div>
        <div class="control-item">
          <label>Right Icon</label>
          <select [(ngModel)]="buttonRightIcon">
            <option value="">None</option>
            <option value="dsi-arrow-right-line">Arrow Right</option>
            <option value="dsi-external-link-line">External Link</option>
          </select>
        </div>
        <div class="control-item">
          <label>Text Color</label>
          <input type="color" [(ngModel)]="buttonTextColor">
        </div>
        <div class="control-item">
          <label>Background Color</label>
          <input type="color" [(ngModel)]="buttonBgColor">
        </div>
        <div class="control-item">
          <label>Border Color</label>
          <input type="color" [(ngModel)]="buttonBorderColor">
        </div>
        <div class="control-item">
          <label>Border Radius</label>
          <input type="text" [(ngModel)]="buttonBorderRadius" placeholder="e.g. 8px">
        </div>
        <div class="control-item">
          <label>Width</label>
          <input type="text" [(ngModel)]="buttonWidth" placeholder="e.g. 100% or 200px">
        </div>
      </div>
    </div>

    <!-- Label Button Preview -->
    <div class="preview-section">
      <div class="preview-header">
        <h3>Label Button Component</h3>
      </div>
      <div class="preview-body">
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <app-label-button
            [label]="labelButtonText"
            [bgColor]="labelBgColor"
            [borderColor]="labelBorderColor"
            [textColor]="labelTextColor"
            [width]="labelWidth"
            [height]="labelHeight">
          </app-label-button>

          <!-- Variants -->
          <app-label-button label="Primary" bgColor="#1677ff" textColor="#ffffff" width="100px"></app-label-button>
          <app-label-button label="Success" bgColor="#52c41a" textColor="#ffffff" width="100px"></app-label-button>
          <app-label-button label="Warning" bgColor="#faad14" textColor="#ffffff" width="100px"></app-label-button>
          <app-label-button label="Danger" bgColor="#ff4d4f" textColor="#ffffff" width="100px"></app-label-button>
        </div>
      </div>
    </div>

    <div class="controls-panel">
      <h3>Label Button Controls</h3>
      <div class="control-group">
        <div class="control-item">
          <label>Label</label>
          <input type="text" [(ngModel)]="labelButtonText">
        </div>
        <div class="control-item">
          <label>Width</label>
          <input type="text" [(ngModel)]="labelWidth" placeholder="e.g. 120px">
        </div>
        <div class="control-item">
          <label>Height</label>
          <input type="text" [(ngModel)]="labelHeight" placeholder="e.g. 28px">
        </div>
        <div class="control-item">
          <label>Background Color</label>
          <input type="color" [(ngModel)]="labelBgColor">
        </div>
        <div class="control-item">
          <label>Border Color</label>
          <input type="color" [(ngModel)]="labelBorderColor">
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
        <div class="log-entry" style="color: #6b7280;">No events yet. Click a button...</div>
      }
    </div>
  `
})
export class ButtonPreviewComponent {
  eventLogs: { time: string; message: string }[] = [];
  buttonSizes: (ButtonSize | '')[] = ['xs', 'sm', 'md', 'lg'];
  
  // Button Container controls
  buttonContent = 'Click Me';
  buttonSize: ButtonSize | '' = 'md';
  buttonLeftIcon = 'dsi-plus-line';
  buttonRightIcon = '';
  buttonTextColor = '#e6f4ff';
  buttonBgColor = '#1e3a5f';
  buttonBorderColor = '#1677ff';
  buttonBorderRadius = '8px';
  buttonWidth = '';
  
  // Label Button controls
  labelButtonText = 'Label';
  labelBgColor = '#1677ff';
  labelBorderColor = '#1677ff';
  labelTextColor = '#ffffff';
  labelWidth = '120px';
  labelHeight = '28px';

  onButtonClick() {
    this.logEvent('Button clicked!');
  }

  logEvent(message: string) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    this.eventLogs.unshift({ time, message });
    if (this.eventLogs.length > 10) this.eventLogs.pop();
  }
}
