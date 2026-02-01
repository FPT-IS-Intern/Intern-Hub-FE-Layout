import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopUpConfirmComponent } from '@lib/shared/components/pop-up/pop-up-confirm/pop-up-confirm.component';

@Component({
  selector: 'app-popup-preview',
  standalone: true,
  imports: [CommonModule, FormsModule, PopUpConfirmComponent],
  template: `
    <div class="demo-header">
      <h2>Pop-up Components</h2>
      <p>Confirmation pop-up and dialog components</p>
    </div>

    <!-- Pop-up Confirm Preview -->
    <div class="preview-section">
      <div class="preview-header">
        <h3>Pop-up Confirm Component</h3>
        <button class="toggle-btn" (click)="showPopup = !showPopup">
          {{ showPopup ? 'Hide' : 'Show' }} Popup
        </button>
      </div>
      <div class="preview-body popup-preview-container" style="min-height: 350px; position: relative;">
        @if (showPopup) {
          <div class="popup-wrapper">
            <app-pop-up-confirm
              [imgUrl]="popupImgUrl"
              [title]="popupTitle"
              [content]="popupContent"
              [colorButton]="popupButtonColor"
              (confirmClick)="onConfirm()"
              (cancelClick)="onCancel()">
            </app-pop-up-confirm>
          </div>
        } @else {
          <div class="popup-placeholder">
            <i class="dsi dsi-alert-line" style="font-size: 48px; color: var(--neutral-600);"></i>
            <p>Click "Show Popup" to preview the component</p>
          </div>
        }
      </div>
    </div>

    <div class="controls-panel">
      <h3>Pop-up Confirm Controls</h3>
      <div class="control-group">
        <div class="control-item">
          <label>Title</label>
          <input type="text" [(ngModel)]="popupTitle">
        </div>
        <div class="control-item">
          <label>Content</label>
          <input type="text" [(ngModel)]="popupContent">
        </div>
        <div class="control-item">
          <label>Image URL</label>
          <input type="text" [(ngModel)]="popupImgUrl" placeholder="https://...">
        </div>
        <div class="control-item">
          <label>Button Color</label>
          <input type="color" [(ngModel)]="popupButtonColor">
        </div>
        <div class="control-item">
          <label>Preset</label>
          <select (change)="applyPreset($event)">
            <option value="">Custom</option>
            <option value="delete">Delete Confirmation</option>
            <option value="logout">Logout Confirmation</option>
            <option value="success">Success Message</option>
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
        <div class="log-entry" style="color: #6b7280;">No events yet. Click Confirm or Cancel...</div>
      }
    </div>
  `,
  styles: [`
    .toggle-btn {
      padding: 8px 16px;
      background: var(--brand-600);
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      transition: background 0.2s;
      
      &:hover {
        background: var(--brand-700);
      }
    }
    
    .popup-preview-container {
      overflow: hidden;
    }
    
    .popup-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      
      ::ng-deep .pop-up-confirm-overlay {
        position: absolute !important;
        z-index: 10 !important;
      }
    }
    
    .popup-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      color: var(--neutral-600);
      
      p {
        margin: 0;
        font-size: 14px;
      }
    }
  `]
})
export class PopupPreviewComponent {
  eventLogs: { time: string; message: string }[] = [];
  showPopup = false;
  
  popupTitle = 'Confirm Action';
  popupContent = 'Are you sure you want to proceed with this action?';
  popupImgUrl = 'https://via.placeholder.com/80x80?text=!';
  popupButtonColor = '#1677ff';

  onConfirm() {
    this.logEvent('Confirm button clicked');
    this.showPopup = false;
  }

  onCancel() {
    this.logEvent('Cancel button clicked');
    this.showPopup = false;
  }

  applyPreset(event: Event) {
    const preset = (event.target as HTMLSelectElement).value;
    
    switch (preset) {
      case 'delete':
        this.popupTitle = 'Delete Item';
        this.popupContent = 'This action cannot be undone. Are you sure you want to delete this item?';
        this.popupButtonColor = '#ff4d4f';
        break;
      case 'logout':
        this.popupTitle = 'Logout';
        this.popupContent = 'You will be signed out of your account.';
        this.popupButtonColor = '#faad14';
        break;
      case 'success':
        this.popupTitle = 'Success!';
        this.popupContent = 'Your changes have been saved successfully.';
        this.popupButtonColor = '#52c41a';
        break;
    }
    
    if (preset) {
      this.logEvent(`Applied ${preset} preset`);
    }
  }

  logEvent(message: string) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    this.eventLogs.unshift({ time, message });
    if (this.eventLogs.length > 10) this.eventLogs.pop();
  }
}
