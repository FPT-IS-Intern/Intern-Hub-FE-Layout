import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-approval-preview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="demo-header">
      <h2>Approval List Components</h2>
      <p>Approval list and list item components for workflow displays</p>
    </div>

    <!-- Approval List Info -->
    <div class="preview-section">
      <div class="preview-header">
        <h3>ApprovalListComponent</h3>
      </div>
      <div class="preview-body" style="flex-direction: column; align-items: flex-start; padding: 24px;">
        <div class="component-info">
          <p>Selector: <code>app-approval-list</code></p>
          <p>Inputs:</p>
          <ul>
            <li><code>rows: ApprovalListItemInterface[]</code> - Array of approval items</li>
            <li><code>headerContentLeft: string</code> - Left header text</li>
            <li><code>headerContentRight: string</code> - Right header text</li>
            <li><code>width: string</code> - Component width</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Approval List Item Info -->
    <div class="preview-section">
      <div class="preview-header">
        <h3>ApprovalListItemComponent</h3>
      </div>
      <div class="preview-body" style="flex-direction: column; align-items: flex-start; padding: 24px;">
        <div class="component-info">
          <p>Selector: <code>app-approval-list-item</code></p>
          <p>Inputs:</p>
          <ul>
            <li><code>name: string</code> - Approver name</li>
            <li><code>date: Date</code> - Approval date</li>
            <li><code>rightTemplate?: TemplateRef&lt;any&gt;</code> - Custom right content template</li>
            <li><code>rightContext?: any</code> - Context for right template</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Interface Info -->
    <div class="preview-section">
      <div class="preview-header">
        <h3>ApprovalListItemInterface</h3>
      </div>
      <div class="preview-body" style="flex-direction: column; align-items: flex-start; padding: 24px;">
        <div class="usage-example">
          <pre>interface ApprovalListItemInterface &#123;
  name: string;
  date: Date;
  rightTemplate?: TemplateRef&lt;any&gt;;
  rightContext?: any;
&#125;</pre>
        </div>
      </div>
    </div>

    <!-- Usage Example -->
    <div class="preview-section">
      <div class="preview-header">
        <h3>Usage Example</h3>
      </div>
      <div class="preview-body" style="flex-direction: column; align-items: flex-start; padding: 24px;">
        <div class="usage-example">
          <pre>&lt;app-approval-list
  [rows]="approvalItems"
  headerContentLeft="Approver"
  headerContentRight="Date"
  width="500px"&gt;
&lt;/app-approval-list&gt;

// In component:
approvalItems: ApprovalListItemInterface[] = [
  &#123; name: 'John Doe', date: new Date() &#125;,
  &#123; name: 'Jane Smith', date: new Date() &#125;,
];</pre>
        </div>
      </div>
    </div>

    <div class="info-note">
      <i class="dsi dsi-info-line"></i>
      <span>Approval components use TemplateRef for custom content. See README for full usage examples.</span>
    </div>
  `,
  styles: [`
    .component-info {
      padding: 16px;
      background: var(--neutral-200);
      border-radius: 8px;
      width: 100%;
      
      h4 {
        margin: 0 0 8px 0;
        color: var(--brand-600);
        font-size: 16px;
      }
      
      p {
        margin: 4px 0;
        font-size: 14px;
      }
      
      ul {
        margin: 8px 0;
        padding-left: 20px;
      }
      
      li {
        margin: 4px 0;
        font-size: 14px;
      }
      
      code {
        background: var(--neutral-300);
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'Fira Code', monospace;
        font-size: 13px;
      }
    }
    
    .usage-example {
      width: 100%;
      
      pre {
        background: var(--neutral-1000);
        color: #4ade80;
        padding: 16px;
        border-radius: 8px;
        font-size: 13px;
        overflow-x: auto;
        margin: 0;
      }
    }
    
    .info-note {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      background: var(--brand-100);
      border-radius: 8px;
      color: var(--brand-800);
      font-size: 14px;
      margin-top: 24px;
      
      i {
        font-size: 20px;
        color: var(--brand-600);
      }
    }
  `]
})
export class ApprovalPreviewComponent {}
