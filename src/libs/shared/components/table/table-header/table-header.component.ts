import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ColumnConfig {
  header: string;
  key: string;
  width: string;
}

@Component({
  selector: 'tr[app-table-header]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss',
})
export class TableHeaderComponent {
  @Input() columns: ColumnConfig[] = [];
  @Input() backgroundColor?: string;
  @Input({ transform: (value: string | undefined) => value || '#ffffff' })
  textColor: string = '#ffffff';
  @Input() headerIconLeft?: string;
  @Input() headerIconRight?: string;
  @Input() fontSize: string = 'var(--font-xs)';
}
