import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from '@lib/shared/components/input/input-text/input-text.component';
import { InputStepperComponent } from '@lib/shared/components/input/input-stepper/input-stepper.component';
import { InputCalendarComponent } from '@lib/shared/components/input/input-calendar/input-calendar.component';

@Component({
  selector: 'app-input-preview',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextComponent, InputStepperComponent, InputCalendarComponent],
  template: `
    <div class="demo-header">
      <h2>Input Components</h2>
      <p>Text input, stepper, and calendar components for user data entry</p>
    </div>

    <!-- Input Text Preview -->
    <div class="preview-section">
      <div class="preview-header">
        <h3>Input Text Component</h3>
      </div>
      <div class="preview-body">
        <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 400px;">
          <app-input-text
            [headerInput]="textHeader"
            [placeholder]="textPlaceholder"
            [value]="textValue"
            [readonly]="textReadonly"
            [required]="textRequired"
            [maxLength]="textMaxLength"
            [showLimit]="textShowLimit"
            [icon]="textIcon"
            [typeInput]="textType"
            [width]="textWidth"
            [borderColor]="textBorderColor"
            [borderColorHover]="textBorderColorHover"
            [borderRadius]="textBorderRadius"
            [placeholderColor]="textPlaceholderColor"
            (valueChange)="onTextChange($event)"
            (iconClick)="onIconClick()">
          </app-input-text>
        </div>
      </div>
    </div>

    <div class="controls-panel">
      <h3>Input Text Controls</h3>
      <div class="control-group">
        <div class="control-item">
          <label>Header Label</label>
          <input type="text" [(ngModel)]="textHeader">
        </div>
        <div class="control-item">
          <label>Placeholder</label>
          <input type="text" [(ngModel)]="textPlaceholder">
        </div>
        <div class="control-item">
          <label>Input Type</label>
          <select [(ngModel)]="textType">
            <option value="text">Text</option>
            <option value="password">Password</option>
            <option value="email">Email</option>
            <option value="number">Number</option>
          </select>
        </div>
        <div class="control-item">
          <label>Max Length</label>
          <input type="number" [(ngModel)]="textMaxLength" min="0">
        </div>
        <div class="control-item">
          <label>Width</label>
          <input type="text" [(ngModel)]="textWidth" placeholder="e.g. 100%">
        </div>
        <div class="control-item">
          <label>Icon</label>
          <select [(ngModel)]="textIcon">
            <option value="">None</option>
            <option value="dsi-search-line">Search</option>
            <option value="dsi-eye-line">Eye</option>
            <option value="dsi-close-line">Close</option>
          </select>
        </div>
        <div class="control-item">
          <label>Readonly</label>
          <input type="checkbox" [(ngModel)]="textReadonly">
        </div>
        <div class="control-item">
          <label>Required</label>
          <input type="checkbox" [(ngModel)]="textRequired">
        </div>
        <div class="control-item">
          <label>Show Limit</label>
          <input type="checkbox" [(ngModel)]="textShowLimit">
        </div>
        <div class="control-item">
          <label>Border Color</label>
          <input type="color" [(ngModel)]="textBorderColor">
        </div>
        <div class="control-item">
          <label>Hover Border Color</label>
          <input type="color" [(ngModel)]="textBorderColorHover">
        </div>
        <div class="control-item">
          <label>Border Radius</label>
          <input type="text" [(ngModel)]="textBorderRadius" placeholder="e.g. 8px">
        </div>
        <div class="control-item">
          <label>Placeholder Color</label>
          <input type="color" [(ngModel)]="textPlaceholderColor">
        </div>
      </div>
    </div>

    <!-- Input Stepper Preview -->
    <div class="preview-section">
      <div class="preview-header">
        <h3>Input Stepper Component</h3>
      </div>
      <div class="preview-body">
        <app-input-stepper
          [value]="stepperValue"
          [min]="stepperMin"
          [max]="stepperMax"
          [step]="stepperStep"
          (valueChange)="onStepperChange($event)">
        </app-input-stepper>
      </div>
    </div>

    <div class="controls-panel">
      <h3>Input Stepper Controls</h3>
      <div class="control-group">
        <div class="control-item">
          <label>Value</label>
          <input type="number" [(ngModel)]="stepperValue">
        </div>
        <div class="control-item">
          <label>Min</label>
          <input type="number" [(ngModel)]="stepperMin">
        </div>
        <div class="control-item">
          <label>Max</label>
          <input type="number" [(ngModel)]="stepperMax">
        </div>
        <div class="control-item">
          <label>Step</label>
          <input type="number" [(ngModel)]="stepperStep">
        </div>
      </div>
    </div>

    <!-- Input Calendar Preview -->
    <div class="preview-section">
      <div class="preview-header">
        <h3>Input Calendar Component</h3>
      </div>
      <div class="preview-body">
        <app-input-calendar
          [headerInput]="calendarHeader"
          [placeholder]="calendarPlaceholder"
          [value]="calendarValue"
          [readonly]="calendarReadonly"
          (valueChange)="onCalendarChange($event)">
        </app-input-calendar>
      </div>
    </div>

    <div class="controls-panel">
      <h3>Input Calendar Controls</h3>
      <div class="control-group">
        <div class="control-item">
          <label>Header</label>
          <input type="text" [(ngModel)]="calendarHeader">
        </div>
        <div class="control-item">
          <label>Placeholder</label>
          <input type="text" [(ngModel)]="calendarPlaceholder">
        </div>
        <div class="control-item">
          <label>Readonly</label>
          <input type="checkbox" [(ngModel)]="calendarReadonly">
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
        <div class="log-entry" style="color: #6b7280;">No events yet. Interact with inputs...</div>
      }
    </div>
  `
})
export class InputPreviewComponent {
  eventLogs: { time: string; message: string }[] = [];
  
  // Input Text controls
  textHeader = 'Email Address';
  textPlaceholder = 'Enter your email...';
  textValue = '';
  textReadonly = false;
  textRequired = false;
  textMaxLength = 50;
  textShowLimit = true;
  textIcon = 'dsi-mail-line';
  textType = 'text';
  textWidth = '100%';
  textBorderColor = '';
  textBorderColorHover = '';
  textBorderRadius = '';
  textPlaceholderColor = '';
  
  // Input Stepper controls
  stepperValue = 1;
  stepperMin = 0;
  stepperMax = 10;
  stepperStep = 1;
  
  // Input Calendar controls (uses string format yyyy-mm-dd)
  calendarValue = '';
  calendarHeader = 'Select Date';
  calendarPlaceholder = 'dd/mm/yyyy';
  calendarReadonly = false;

  onTextChange(value: string) {
    this.textValue = value;
    this.logEvent(`Text changed: "${value}"`);
  }

  onIconClick() {
    this.logEvent('Input icon clicked');
  }

  onStepperChange(value: number) {
    this.stepperValue = value;
    this.logEvent(`Stepper value: ${value}`);
  }

  onCalendarChange(value: string) {
    this.calendarValue = value;
    this.logEvent(`Calendar selected: ${value}`);
  }

  logEvent(message: string) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    this.eventLogs.unshift({ time, message });
    if (this.eventLogs.length > 10) this.eventLogs.pop();
  }
}
