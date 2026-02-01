import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-preview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="demo-header">
      <h2>Table Components</h2>
      <p>Table header and body components for data display</p>
    </div>

    <!-- Table Info -->
    <div class="preview-section">
      <div class="preview-header">
        <h3>Table Components Info</h3>
      </div>
      <div class="preview-body" style="flex-direction: column; align-items: flex-start; padding: 24px;">
        <div class="component-info">
          <h4>TableHeaderComponent</h4>
          <p>Selector: <code>tr[app-table-header]</code></p>
          <p>Inputs:</p>
          <ul>
            <li><code>columns: ColumnConfig[]</code> - Array of column configurations</li>
            <li><code>backgroundColor?: string</code> - Header background color</li>
            <li><code>textColor: string</code> - Header text color</li>
            <li><code>fontSize: string</code> - Font size (default: var(--font-xs))</li>
          </ul>
        </div>
        
        <div class="component-info">
          <h4>TableBodyComponent</h4>
          <p>Selector: <code>[app-table-body]</code></p>
          <p>Inputs:</p>
          <ul>
            <li><code>rows: any[]</code> - Array of data rows</li>
            <li><code>columns: ColumnConfig[]</code> - Column configurations</li>
            <li><code>columnTemplates: &#123;[key: string]: TemplateRef&#60;any&#62;&#125;</code> - Custom column templates</li>
            <li><code>fontSize: string</code> - Font size (default: var(--font-sm))</li>
          </ul>
        </div>

        <div class="component-info">
          <h4>ColumnConfig Interface</h4>
          <pre>interface ColumnConfig &#123;
  header: string;
  key: string;
  width: string;
&#125;</pre>
        </div>

        <div class="usage-example">
          <h4>Usage Example</h4>
          <pre>&lt;table&gt;
  &lt;tr app-table-header 
      [columns]="columns" 
      backgroundColor="#1677ff"
      textColor="#ffffff"&gt;
  &lt;/tr&gt;
  &lt;tbody app-table-body 
         [rows]="data" 
         [columns]="columns"&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</pre>
        </div>
      </div>
    </div>

    <div class="info-note">
      <i class="dsi dsi-info-line"></i>
      <span>Table components use TemplateRef for custom column rendering. See README for full usage examples.</span>
    </div>
  `,
  styles: [`
    .component-info {
      margin-bottom: 24px;
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

      pre {
        background: var(--neutral-1000);
        color: #4ade80;
        padding: 12px;
        border-radius: 6px;
        font-size: 13px;
        overflow-x: auto;
        margin: 8px 0 0 0;
      }
    }
    
    .usage-example {
      width: 100%;
      
      h4 {
        margin: 0 0 8px 0;
        color: var(--neutral-800);
      }
      
      pre {
        background: var(--neutral-1000);
        color: #4ade80;
        padding: 16px;
        border-radius: 8px;
        font-size: 13px;
        overflow-x: auto;
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
      
      i {
        font-size: 20px;
        color: var(--brand-600);
      }
    }
  `]
})
export class TablePreviewComponent {}
