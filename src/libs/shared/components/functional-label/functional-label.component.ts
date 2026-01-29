import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-functional-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './functional-label.component.html',
  styleUrls: ['./functional-label.component.scss']
})
export class FunctionalLabelComponent {
  @Input() icon?: string;
  @Input() content: string = '';

}
