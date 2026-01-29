import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ApprovalListItemInterface } from '../../shared/components/approval/approval-list-item/approval-list-item.model';
import { ButtonContainerComponent } from '../../shared/components/button/button-container/button-container.component';
import { InputTextComponent } from '../../shared/components/input/input-text/input-text.component';
import { InputCalendarComponent } from '../../shared/components/input/input-calendar/input-calendar.component';
import { ApprovalListComponent } from '../../shared/components/approval/approval-list/approval-list.component';
import { PopUpConfirmComponent } from '../../shared/components/pop-up/pop-up-confirm/pop-up-confirm.component';
import { InputStepperComponent } from '../../shared/components/input/input-stepper/input-stepper.component';
import { TableBodyComponent } from '../../shared/components/table/table-body/table-body.component';
import {
  ColumnConfig,
  TableHeaderComponent,
} from '../../shared/components/table/table-header/table-header.component';

@Component({
  selector: 'app-main-layout-test',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonContainerComponent,
    ApprovalListComponent,
    InputTextComponent,
    InputCalendarComponent,
    PopUpConfirmComponent,
    InputStepperComponent,
    TableBodyComponent,
    TableHeaderComponent,
  ],
  templateUrl: './main-layout-test.component.html',
  styleUrls: ['./main-layout-test.component.scss'],
})
export class MainLayoutTestComponent {
  @ViewChild('textRight', { static: true })
  textRight!: TemplateRef<any>;

  @ViewChild('buttonRight', { static: true })
  buttonRight!: TemplateRef<any>;

  // Sample data for approval list
  approvalRows: ApprovalListItemInterface[] = [
    { name: 'Nguyễn Văn A', date: new Date('2026-01-15') },
    { name: 'Trần Thị B', date: new Date('2026-01-20') },
    { name: 'Lê Văn C', date: new Date('2026-01-25') },
    { name: 'Phạm Thị D', date: new Date('2026-01-28') },
  ];
  tableBackgroundColor = 'var(--brand-600)';

  columns: ColumnConfig[] = [
    { key: 'name', header: 'Tên', width: '20%' },
    { key: 'role', header: 'Chức vụ', width: '15%' },
    { key: 'status', header: 'Trạng thái', width: '15%' },
    { key: 'email', header: 'Email', width: '30%' },
    { key: 'date', header: 'Ngày', width: '20%' },
  ];

  rows = [
    {
      name: 'Nguyễn Văn A',
      role: 'Developer',
      status: 'Active',
      email: 'a.nguyen@example.com',
      date: '15/01/2026',
    },
    {
      name: 'Trần Thị B',
      role: 'Tester',
      status: 'Inactive',
      email: 'b.tran@example.com',
      date: '20/01/2026',
    },
    {
      name: 'Lê Văn C',
      role: 'Manager',
      status: 'Active',
      email: 'c.le@example.com',
      date: '25/01/2026',
    },
    {
      name: 'Phạm Thị D',
      role: 'Designer',
      status: 'Pending',
      email: 'd.pham@example.com',
      date: '28/01/2026',
    },
  ];

  showPopup = false;

  onButtonClick(buttonName: string): void {
    console.log(`Button clicked: ${buttonName}`);
    this.showPopup = true;
  }

  onPopupConfirm(): void {
    console.log('✅ Popup confirmed!');
    this.showPopup = false;
  }

  onPopupCancel(): void {
    console.log('❌ Popup cancelled!');
    this.showPopup = false;
  }

  // Password toggle logic demo
  passwordType: 'text' | 'password' = 'password';
  passwordIcon: string = 'fa-solid fa-eye-slash';

  togglePassword(): void {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passwordIcon = 'fa-solid fa-eye';
    } else {
      this.passwordType = 'password';
      this.passwordIcon = 'fa-solid fa-eye-slash';
    }
  }
}
