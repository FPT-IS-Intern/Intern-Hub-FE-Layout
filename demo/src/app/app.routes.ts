import { Routes } from '@angular/router';
import { LayoutPreviewComponent } from './previews/layout-preview.component';
import { IconPreviewComponent } from './previews/icon-preview.component';
import { ButtonPreviewComponent } from './previews/button-preview.component';
import { InputPreviewComponent } from './previews/input-preview.component';
import { TablePreviewComponent } from './previews/table-preview.component';
import { ApprovalPreviewComponent } from './previews/approval-preview.component';
import { PopupPreviewComponent } from './previews/popup-preview.component';

export const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  { path: 'layout', component: LayoutPreviewComponent },
  { path: 'icon', component: IconPreviewComponent },
  { path: 'button', component: ButtonPreviewComponent },
  { path: 'input', component: InputPreviewComponent },
  { path: 'table', component: TablePreviewComponent },
  { path: 'approval', component: ApprovalPreviewComponent },
  { path: 'popup', component: PopupPreviewComponent },
];
