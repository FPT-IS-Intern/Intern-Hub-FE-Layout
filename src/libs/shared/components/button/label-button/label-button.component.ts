import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-label-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label-button.component.html',
  styleUrls: ['./label-button.component.scss'],
})
export class LabelButtonComponent {
  @Input() label: string = '';
  @Input() bgColor: string = '';
  @Input() borderColor: string = '';
  @Input() width: string = '100%';
  @Input() height: string = '28px';
  @Input() textColor: string = 'var(--neutral-100)';
}
