import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { ColumnConfig } from '../table-header/table-header.component';

@Component({
  selector: '[app-table-body]', // ✅ Attribute selector
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-body.component.html',
  styleUrl: './table-body.component.scss',
})
export class TableBodyComponent {
  @Input() rows: any[] = [];
  @Input() columns: ColumnConfig[] = [];
  @Input() columnTemplates: { [key: string]: TemplateRef<any> } = {};
  @Input() fontSize: string = 'var(--font-sm)';
}
