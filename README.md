# Intern Hub Layout

This library provides a standard layout and shared UI components for Intern Hub applications. It is designed to be highly configurable via Angular Routing.

## Installation

Run the following command to install the package:

```bash
npm install intern-hub-layout dynamic-ds
```

_(Note: `dynamic-ds` is a required peer dependency for the design system)_

## Setup

To enable the configurable layout pattern, you must add `withComponentInputBinding()` to your `app.config.ts`. This allows the Router to pass configuration data directly to the Layout component inputs.

**`src/app/app.config.ts`**

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router'; // Import this
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()), // Add this function
  ],
};
```

## Usage

### 1. Main Layout Configuration

You can use the `MainLayoutComponent` as a shell for your application. Define the Sidebar items directly in your route configuration using the `data` property.

**`src/app/app.routes.ts`**

```typescript
import { Routes } from '@angular/router';
import { MainLayoutComponent } from 'intern-hub-layout'; // Import from library

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    // Configure Sidebar Items here
    data: {
      sidebarItems: [
        { icon: 'dsi-home-01-line', content: 'Home' },
        { icon: 'dsi-map-01-line', content: 'Roadmap' },
        { icon: 'dsi-file-01-line', content: 'Documents' },
      ],
    },
    // Your application pages go here
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
      },
    ],
  },
];
```

### 2. Using Shared Components

You can import individual components from the library.

```typescript
import { Component } from '@angular/core';
import { ButtonContainerComponent, InputTextComponent } from 'intern-hub-layout';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonContainerComponent, InputTextComponent],
  template: `
    <app-button-container content="Click Me"></app-button-container>
    <app-input-text placeholder="Enter name"></app-input-text>
  `,
})
export class ExampleComponent {}
```

## Available Components

### Layouts

- `MainLayoutComponent`: Full application shell with Sidebar and Header.
- `SidebarComponent`: Standalone sidebar.
- `HeaderComponent`: Standalone header.

### Shared UI

- **Buttons**: `ButtonContainerComponent`, `LabelButtonComponent`
- **Inputs**: `InputTextComponent`, `InputStepperComponent`, `InputCalendarComponent`
- **Tables**: `TableHeaderComponent`, `TableBodyComponent`
- **Other**: `ApprovalListComponent`, `PopUpConfirmComponent`

## Author

Intern Hub Team

## Component API Reference

### 1. `MainLayoutComponent`

The main application shell.

- **Inputs**:
  - `sidebarItems: SidebarItem[]`: List of items to display in the sidebar.

#### Interface `SidebarItem`

```typescript
interface SidebarItem {
  icon: string;
  content: string;
}
```

---

### 2. `ButtonContainerComponent`

A container for standard buttons.

- **Selector**: `app-button-container`
- **Inputs**:
  - `size: 'xs' | 'sm' | 'md' | 'lg'`: Size of the button (default: `'md'`).
  - `content: string`: Text content of the button.
  - `leftIcon: string`: CSS class or content for left icon.
  - `rightIcon: string`: CSS class or content for right icon.
  - `color: string`: Text color (default: `var(--brand-100)`).
  - `backgroundColor: string`: Background color (default: `var(--utility-900)`).
  - `borderColor: string`: Border color (default: `var(--brand-100)`).
  - `fontSize: string`: Custom font size.
- **Outputs**:
  - `buttonClick`: Event emitted when button is clicked.

### 3. `LabelButtonComponent`

A small button-like label.

- **Selector**: `app-label-button`
- **Inputs**:
  - `label: string`: Text content.
  - `bgColor: string`: Background color.
  - `borderColor: string`: Border color.
  - `textColor: string`: Text color.
  - `width: string`: Width of the component (default: `100%`).
  - `height: string`: Height of the component (default: `28px`).

---

### 4. `InputTextComponent`

Standard text input field.

- **Selector**: `app-input-text`
- **Inputs**:
  - `headerInput: string`: Label text above the input.
  - `placeholder: string`: Placeholder text.
  - `value: string`: Initial value (supports binding).
  - `readonly: boolean`: If true, input is read-only.
  - `required: boolean`: If true, shows required asterisk.
  - `width: string`: Width of the input container (default: `100%`).
  - `maxLength: number`: Maximum character length.
  - `showLimit: boolean`: Whether to show character count.
  - `icon: string`: Icon class to display inside input.
  - `typeInput: string`: Input type (e.g., `'text'`, `'password'`).
- **Outputs**:
  - `valueChange`: Emits new value on input.
  - `iconClick`: Emits when the icon is clicked.

### 5. `InputStepperComponent`

Number input with increment/decrement buttons.

- **Selector**: `app-input-stepper`
- **Inputs**:
  - `headerInput`: Label text.
  - `value: number`: Initial value.
  - `min`: Minimum value (default: 0).
  - `max`: Maximum value (default: 100).
  - `step`: Step value (default: 1).
  - `state`: Visual state (`'default'`, `'negative'`, `'positive'`).
  - `helperText`: Text displayed below the input.
  - `readonly`, `required`, `disabled`, `width`.
- **Outputs**:
  - `valueChange`: Emits new numeric value.

### 6. `InputCalendarComponent`

Date picker input.

- **Selector**: `app-input-calendar`
- **Inputs**:
  - `headerInput`: Label text.
  - `value: string`: Date value in ISO format (`yyyy-mm-dd`).
  - `placeholder`: Placeholder text (default: `'dd/mm/yyyy'`).
  - `readonly`, `required`, `width`.
- **Outputs**:
  - `valueChange`: Emits selected date in ISO format.

---

### 7. `TableHeaderComponent`

Renders table headers.

- **Selector**: `tr[app-table-header]` (Attribute on `<tr>`)
- **Inputs**:
  - `columns: ColumnConfig[]`: Array of column configurations.
  - `backgroundColor`: Header background color.
  - `textColor`: Text color (default: white).
  - `headerIconLeft`, `headerIconRight`: Icons for header cells.

#### Interface `ColumnConfig`

```typescript
interface ColumnConfig {
  header: string; // Display text
  key: string; // Data key
  width: string; // CSS width
}
```

### 8. `TableBodyComponent`

Renders table rows.

- **Selector**: `tbody[app-table-body]` (Attribute on `<tbody>`)
- **Inputs**:
  - `rows: any[]`: Array of data objects.
  - `columns: ColumnConfig[]`: Column configuration to map data.
  - `columnTemplates`: Object mapping column keys to `TemplateRef` for custom cell rendering.

---

### 9. `ApprovalListComponent`

A list component showing approval items.

- **Selector**: `app-approval-list`
- **Inputs**:
  - `rows: ApprovalListItemInterface[]`: List of items.
  - `headerContentLeft`: Text for left header.
  - `headerContentRight`: Text for right header.
  - `width`: Component width.

### 10. `PopUpConfirmComponent`

A confirmation modal.

- **Selector**: `app-pop-up-confirm`
- **Inputs**:
  - `title`: Popup title.
  - `content`: Message body.
  - `imgUrl`: Icon/Image URL.
  - `colorButton`: Color of the confirm button.
- **Outputs**:
  - `confirmClick`: Emits when confirmed.
  - `cancelClick`: Emits when canceled.
