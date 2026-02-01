# 🏢 Intern Hub Layout

![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=flat&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)
![npm](https://img.shields.io/badge/npm-@goat--bravos/intern--hub--layout-CB3837?style=flat&logo=npm)

A comprehensive Angular library providing reusable layout components and shared UI elements for Intern Hub applications. Built with Angular 21 and designed for seamless integration.

---

## 📋 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Components](#-components)
  - [Layout Components](#layout-components)
  - [Button Components](#button-components)
  - [Input Components](#input-components)
  - [Table Components](#table-components)
  - [Approval Components](#approval-components)
  - [Pop-up Components](#pop-up-components)
  - [Icon Components](#icon-components)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 🎨 **Pre-built Layouts** - Header and sidebar components with hover effects
- 🧩 **Reusable UI Components** - Buttons, inputs, tables, approval lists, and more
- 🔧 **Highly Configurable** - Extensive customization via inputs
- 📦 **Standalone Components** - Modern Angular standalone component architecture
- 🎯 **TypeScript Support** - Full type definitions included
- ♿ **Accessible** - Built with accessibility best practices
- 🚀 **Angular 21 Ready** - Built for the latest Angular version

---

## 📦 Installation

Install the package via npm:

```bash
npm install @goat-bravos/intern-hub-layout
```

### Peer Dependencies

This library requires the following peer dependencies:

| Package           | Version | Required    |
| ----------------- | ------- | ----------- |
| `@angular/common` | ^21.0.0 | ✅ Yes      |
| `@angular/core`   | ^21.0.0 | ✅ Yes      |
| `@angular/forms`  | ^21.0.0 | ✅ Yes      |
| `@angular/router` | ^21.0.0 | ✅ Yes      |
| `dynamic-ds`      | ^1.0.2  | ⚠️ Optional |

Install peer dependencies if not already present:

```bash
npm install @angular/common @angular/core @angular/forms @angular/router
```

---

## 🚀 Quick Start

### Step 1: Import Components

Import the components you need in your Angular component:

```typescript
import { Component } from "@angular/core";
import { HeaderComponent, SidebarComponent, ButtonContainerComponent, InputTextComponent } from "@goat-bravos/intern-hub-layout";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ButtonContainerComponent, InputTextComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
```

### Step 2: Use in Template

```html
<!-- Header -->
<app-header-component [data]="headerData"></app-header-component>

<!-- Sidebar -->
<app-sidebar [data]="sidebarData"></app-sidebar>

<!-- Button -->
<app-button-container content="Click Me" size="md" backgroundColor="var(--brand-500)" (buttonClick)="onButtonClick()"></app-button-container>

<!-- Input -->
<app-input-text headerInput="Username" placeholder="Enter your username" [required]="true" [(value)]="username"></app-input-text>
```

---

## 🧩 Components

### Layout Components

#### HeaderComponent

A responsive header with logo, action buttons, and user profile.

**Selector:** `app-header-component`

```typescript
import { HeaderComponent, HeaderData } from "@goat-bravos/intern-hub-layout";

@Component({
  imports: [HeaderComponent],
  template: `<app-header-component [data]="headerData"></app-header-component>`,
})
export class MyComponent {
  headerData: HeaderData = {
    headerItems: [
      {
        icon: "dsi-bell-line",
        content: "Notifications",
        badge: "5",
        method: () => console.log("Notifications clicked"),
      },
      {
        icon: "dsi-settings-line",
        content: "Settings",
        method: () => console.log("Settings clicked"),
      },
    ],
    userName: "John Doe",
    userIcon: "dsi-user-01-line",
    dropdownIcon: "dsi-arrow-down-solid",
    logo: "assets/logo.png",
  };
}
```

**Interfaces:**

```typescript
interface HeaderData {
  headerItems: HeaderAction[];
  userName: string;
  userIcon?: IconData | string;
  userIconColor?: string;
  dropdownIcon?: IconData | string;
  dropdownIconColor?: string;
  logo?: string;
}

interface HeaderAction {
  icon: IconData | string;
  content: string;
  method?: () => void;
  badge?: string;
  colorIcon?: string;
  width?: string;
  height?: string;
}
```

---

#### SidebarComponent

A collapsible sidebar with hover expansion and customizable menu items.

**Selector:** `app-sidebar`

```typescript
import { SidebarComponent, SidebarData, SidebarItem } from "@goat-bravos/intern-hub-layout";

@Component({
  imports: [SidebarComponent],
  template: `<app-sidebar [data]="sidebarData"></app-sidebar>`,
})
export class MyComponent {
  sidebarData: SidebarData = {
    menuItems: [
      {
        iconLeft: "dsi-home-01-line",
        content: "Dashboard",
        url: "/dashboard",
        colorIconLeft: "#666",
        colorIconLeftHover: "#fff",
        backgroundColor: "transparent",
        backgroundColorHover: "#3b82f6",
      },
      {
        iconLeft: "dsi-users-line",
        content: "Users",
        url: "/users",
        colorIconLeft: "#666",
        colorIconLeftHover: "#fff",
      },
      {
        iconLeft: "dsi-settings-line",
        content: "Settings",
        url: "/settings",
      },
    ],
    backgroundColor: "#1e293b",
  };
}
```

**Interface:**

```typescript
interface SidebarItem {
  iconLeft?: IconData | string;
  iconRight?: IconData | string;
  content: string;
  url?: string;
  colorIconLeft?: string;
  colorIconLeftHover?: string;
  colorIconRight?: string;
  colorIconRightHover?: string;
  colorContent?: string;
  colorContentHover?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  borderRadius?: string;
  borderRadiusHover?: string;
  width?: string;
  height?: string;
}

interface SidebarData {
  menuItems: SidebarItem[];
  backgroundColor?: string;
}
```

---

### Button Components

#### ButtonContainerComponent

A customizable button with icon support and multiple size variants.

**Selector:** `app-button-container`

```typescript
import { ButtonContainerComponent, ButtonSize } from "@goat-bravos/intern-hub-layout";

@Component({
  imports: [ButtonContainerComponent],
  template: `
    <!-- Basic button -->
    <app-button-container content="Submit" size="md" (buttonClick)="onSubmit()"></app-button-container>

    <!-- Button with icons -->
    <app-button-container content="Download" size="lg" leftIcon="⬇" backgroundColor="#10b981" color="#ffffff" (buttonClick)="onDownload()"></app-button-container>

    <!-- Small button -->
    <app-button-container content="Edit" size="xs" backgroundColor="#f59e0b" (buttonClick)="onEdit()"></app-button-container>
  `,
})
export class MyComponent {
  onSubmit() {
    console.log("Form submitted");
  }
  onDownload() {
    console.log("Download initiated");
  }
  onEdit() {
    console.log("Edit clicked");
  }
}
```

**Inputs:**

| Input             | Type                           | Default                | Description           |
| ----------------- | ------------------------------ | ---------------------- | --------------------- |
| `size`            | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'`                 | Button size variant   |
| `content`         | `string`                       | `''`                   | Button text           |
| `leftIcon`        | `string`                       | -                      | Left icon text/class  |
| `rightIcon`       | `string`                       | -                      | Right icon text/class |
| `color`           | `string`                       | `'var(--brand-100)'`   | Text color            |
| `backgroundColor` | `string`                       | `'var(--utility-900)'` | Background color      |
| `borderColor`     | `string`                       | `'var(--brand-100)'`   | Border color          |
| `fontSize`        | `string`                       | -                      | Custom font size      |

**Outputs:**

| Output        | Type                | Description               |
| ------------- | ------------------- | ------------------------- |
| `buttonClick` | `EventEmitter<any>` | Emits when button clicked |

---

#### LabelButtonComponent

A simple label/badge style button for status indicators.

**Selector:** `app-label-button`

```typescript
import { LabelButtonComponent } from "@goat-bravos/intern-hub-layout";

@Component({
  imports: [LabelButtonComponent],
  template: `
    <!-- Success status -->
    <app-label-button label="Active" bgColor="#22c55e" textColor="#ffffff"></app-label-button>

    <!-- Warning status -->
    <app-label-button label="Pending" bgColor="#f59e0b" textColor="#000000"></app-label-button>

    <!-- Custom size -->
    <app-label-button label="Custom" bgColor="#3b82f6" width="120px" height="32px"></app-label-button>
  `,
})
export class MyComponent {}
```

**Inputs:**

| Input         | Type     | Default                | Description      |
| ------------- | -------- | ---------------------- | ---------------- |
| `label`       | `string` | `''`                   | Button text      |
| `bgColor`     | `string` | `''`                   | Background color |
| `borderColor` | `string` | `''`                   | Border color     |
| `textColor`   | `string` | `'var(--neutral-100)'` | Text color       |
| `width`       | `string` | `'100%'`               | Button width     |
| `height`      | `string` | `'28px'`               | Button height    |

---

### Input Components

#### InputTextComponent

A text input with label, character limit, and icon support.

**Selector:** `app-input-text`

```typescript
import { InputTextComponent } from "@goat-bravos/intern-hub-layout";

@Component({
  imports: [InputTextComponent],
  template: `
    <!-- Basic input -->
    <app-input-text headerInput="Email" placeholder="Enter your email" [required]="true" [(value)]="email" (valueChange)="onEmailChange($event)"></app-input-text>

    <!-- Input with character limit -->
    <app-input-text headerInput="Bio" placeholder="Tell us about yourself" [maxLength]="200" [showLimit]="true" [(value)]="bio"></app-input-text>

    <!-- Password input with icon -->
    <app-input-text headerInput="Password" placeholder="Enter password" typeInput="password" icon="dsi-eye-line" (iconClick)="togglePassword()" [(value)]="password"></app-input-text>
  `,
})
export class MyComponent {
  email = "";
  bio = "";
  password = "";

  onEmailChange(value: string) {
    console.log("Email changed:", value);
  }

  togglePassword() {
    // Toggle password visibility
  }
}
```

**Inputs:**

| Input         | Type      | Default  | Description                    |
| ------------- | --------- | -------- | ------------------------------ |
| `headerInput` | `string`  | `''`     | Label text above input         |
| `placeholder` | `string`  | `''`     | Placeholder text               |
| `value`       | `string`  | `''`     | Input value (two-way binding)  |
| `readonly`    | `boolean` | `false`  | Read-only state                |
| `required`    | `boolean` | `false`  | Shows required indicator (\*)  |
| `width`       | `string`  | `'100%'` | Container width                |
| `maxLength`   | `number`  | `0`      | Max characters (0 = unlimited) |
| `showLimit`   | `boolean` | `false`  | Show character count           |
| `icon`        | `string`  | `''`     | Icon class for input           |
| `typeInput`   | `string`  | `'text'` | Input type                     |

**Outputs:**

| Output        | Type                   | Description                |
| ------------- | ---------------------- | -------------------------- |
| `valueChange` | `EventEmitter<string>` | Emits on value change      |
| `iconClick`   | `EventEmitter<void>`   | Emits when icon is clicked |

---

#### InputStepperComponent

A numeric stepper input with increment/decrement buttons.

**Selector:** `app-input-stepper`

```typescript
import { InputStepperComponent } from "@goat-bravos/intern-hub-layout";

@Component({
  imports: [InputStepperComponent],
  template: `
    <!-- Basic stepper -->
    <app-input-stepper headerInput="Quantity" [(value)]="quantity" [min]="1" [max]="100" [step]="1"></app-input-stepper>

    <!-- Stepper with helper text -->
    <app-input-stepper headerInput="Age" [(value)]="age" [min]="0" [max]="120" helperText="Enter your age" [required]="true"></app-input-stepper>

    <!-- Disabled stepper -->
    <app-input-stepper headerInput="Fixed Value" [value]="10" [disabled]="true"></app-input-stepper>
  `,
})
export class MyComponent {
  quantity = 1;
  age = 25;
}
```

**Inputs:**

| Input         | Type                                    | Default     | Description       |
| ------------- | --------------------------------------- | ----------- | ----------------- |
| `headerInput` | `string`                                | `''`        | Label text        |
| `value`       | `number`                                | `0`         | Current value     |
| `min`         | `number`                                | `0`         | Minimum value     |
| `max`         | `number`                                | `100`       | Maximum value     |
| `step`        | `number`                                | `1`         | Step increment    |
| `placeholder` | `string`                                | `''`        | Input placeholder |
| `readonly`    | `boolean`                               | `false`     | Read-only state   |
| `required`    | `boolean`                               | `false`     | Required state    |
| `disabled`    | `boolean`                               | `false`     | Disabled state    |
| `width`       | `string`                                | `'100%'`    | Component width   |
| `error`       | `string`                                | `''`        | Error message     |
| `helperText`  | `string`                                | `''`        | Helper text below |
| `state`       | `'default' \| 'negative' \| 'positive'` | `'default'` | Visual state      |

**Outputs:**

| Output        | Type                   | Description           |
| ------------- | ---------------------- | --------------------- |
| `valueChange` | `EventEmitter<number>` | Emits on value change |

---

#### InputCalendarComponent

A date picker with auto-formatting (dd/mm/yyyy) and validation.

**Selector:** `app-input-calendar`

```typescript
import { InputCalendarComponent } from "@goat-bravos/intern-hub-layout";

@Component({
  imports: [InputCalendarComponent],
  template: `
    <!-- Basic date picker -->
    <app-input-calendar headerInput="Start Date" [(value)]="startDate" (valueChange)="onDateChange($event)"></app-input-calendar>

    <!-- Required date picker -->
    <app-input-calendar headerInput="Birth Date" [required]="true" [(value)]="birthDate"></app-input-calendar>

    <!-- Read-only date -->
    <app-input-calendar headerInput="Created At" [readonly]="true" [value]="createdAt"></app-input-calendar>
  `,
})
export class MyComponent {
  startDate = ""; // ISO format: '2024-01-15'
  birthDate = "";
  createdAt = "2024-01-01";

  onDateChange(isoDate: string) {
    console.log("Date selected:", isoDate); // Output: '2024-01-15'
  }
}
```

**Inputs:**

| Input         | Type      | Default        | Description                         |
| ------------- | --------- | -------------- | ----------------------------------- |
| `headerInput` | `string`  | `''`           | Label text                          |
| `value`       | `string`  | `''`           | Date value (ISO format: yyyy-mm-dd) |
| `placeholder` | `string`  | `'dd/mm/yyyy'` | Placeholder text                    |
| `readonly`    | `boolean` | `false`        | Read-only state                     |
| `required`    | `boolean` | `false`        | Required state                      |
| `width`       | `string`  | `'100%'`       | Component width                     |

**Outputs:**

| Output        | Type                   | Description                       |
| ------------- | ---------------------- | --------------------------------- |
| `valueChange` | `EventEmitter<string>` | Emits ISO date on valid selection |

> **Note:** The calendar validates dates and only emits valid dates. Invalid dates like `31/02/2024` will not trigger a valueChange event.

---

### Table Components

#### TableHeaderComponent & TableBodyComponent

Table components with customizable columns and template support.

**Selectors:** `tr[app-table-header]`, `tbody[app-table-body]`

```typescript
import { TableHeaderComponent, TableBodyComponent, ColumnConfig } from "@goat-bravos/intern-hub-layout";
import { CommonModule } from "@angular/common";

@Component({
  imports: [CommonModule, TableHeaderComponent, TableBodyComponent],
  template: `
    <table class="data-table">
      <thead>
        <tr app-table-header [columns]="columns" backgroundColor="#1e293b" textColor="#ffffff"></tr>
      </thead>
      <tbody app-table-body [columns]="columns" [rows]="users" [columnTemplates]="{ status: statusTemplate }"></tbody>
    </table>

    <!-- Custom template for status column -->
    <ng-template #statusTemplate let-value let-row="row">
      <app-label-button [label]="value" [bgColor]="value === 'Active' ? '#22c55e' : '#ef4444'" textColor="#ffffff"></app-label-button>
    </ng-template>
  `,
})
export class MyComponent {
  columns: ColumnConfig[] = [
    { header: "ID", key: "id", width: "80px" },
    { header: "Name", key: "name", width: "200px" },
    { header: "Email", key: "email", width: "250px" },
    { header: "Status", key: "status", width: "120px" },
  ];

  users = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
    { id: 3, name: "Bob Wilson", email: "bob@example.com", status: "Active" },
  ];
}
```

**ColumnConfig Interface:**

```typescript
interface ColumnConfig {
  header: string; // Display header text
  key: string; // Property key in data object
  width: string; // Column width (CSS value)
}
```

**TableHeaderComponent Inputs:**

| Input             | Type             | Default            | Description            |
| ----------------- | ---------------- | ------------------ | ---------------------- |
| `columns`         | `ColumnConfig[]` | `[]`               | Column definitions     |
| `backgroundColor` | `string`         | -                  | Header background      |
| `textColor`       | `string`         | `'#ffffff'`        | Text color             |
| `headerIconLeft`  | `string`         | -                  | Left icon for columns  |
| `headerIconRight` | `string`         | -                  | Right icon for columns |
| `fontSize`        | `string`         | `'var(--font-xs)'` | Font size              |

**TableBodyComponent Inputs:**

| Input             | Type                                  | Default            | Description           |
| ----------------- | ------------------------------------- | ------------------ | --------------------- |
| `rows`            | `any[]`                               | `[]`               | Data array            |
| `columns`         | `ColumnConfig[]`                      | `[]`               | Column definitions    |
| `columnTemplates` | `{ [key: string]: TemplateRef<any> }` | `{}`               | Custom cell templates |
| `fontSize`        | `string`                              | `'var(--font-sm)'` | Font size             |

---

### Approval Components

#### ApprovalListComponent

A list component for displaying approval workflows with customizable right-side templates.

**Selector:** `app-approval-list`

```typescript
import { ApprovalListComponent, ApprovalListItemInterface, ButtonContainerComponent } from "@goat-bravos/intern-hub-layout";
import { CommonModule } from "@angular/common";

@Component({
  imports: [CommonModule, ApprovalListComponent, ButtonContainerComponent],
  template: `
    <app-approval-list [rows]="approvalItems" headerContentLeft="Applicant" headerContentRight="Actions" width="600px"></app-approval-list>

    <!-- Template for action buttons -->
    <ng-template #actionsTemplate let-row="row">
      <div class="action-buttons">
        <app-button-container content="Approve" size="xs" backgroundColor="#22c55e" (buttonClick)="approve(row)"></app-button-container>
        <app-button-container content="Reject" size="xs" backgroundColor="#ef4444" (buttonClick)="reject(row)"></app-button-container>
      </div>
    </ng-template>
  `,
})
export class MyComponent {
  @ViewChild("actionsTemplate") actionsTemplate!: TemplateRef<any>;

  approvalItems: ApprovalListItemInterface[] = [];

  ngAfterViewInit() {
    this.approvalItems = [
      {
        name: "John Doe - Leave Request",
        date: new Date("2024-01-15"),
        rightTemplate: this.actionsTemplate,
        rightContext: { row: { id: 1, type: "leave" } },
      },
      {
        name: "Jane Smith - Expense Report",
        date: new Date("2024-01-14"),
        rightTemplate: this.actionsTemplate,
        rightContext: { row: { id: 2, type: "expense" } },
      },
    ];
  }

  approve(row: any) {
    console.log("Approved:", row);
  }

  reject(row: any) {
    console.log("Rejected:", row);
  }
}
```

**ApprovalListItemInterface:**

```typescript
interface ApprovalListItemInterface {
  name: string;
  date: Date;
  rightTemplate?: TemplateRef<any>;
  rightContext?: any;
}
```

---

### Pop-up Components

#### PopUpConfirmComponent

An accessible confirmation modal dialog.

**Selector:** `app-pop-up-confirm`

```typescript
import { PopUpConfirmComponent } from "@goat-bravos/intern-hub-layout";
import { CommonModule } from "@angular/common";

@Component({
  imports: [CommonModule, PopUpConfirmComponent],
  template: `
    <button (click)="showConfirm = true">Delete Item</button>

    @if (showConfirm) {
      <app-pop-up-confirm title="Confirm Delete" content="Are you sure you want to delete this item? This action cannot be undone." imgUrl="assets/warning-icon.svg" colorButton="#ef4444" (confirmClick)="onConfirm()" (cancelClick)="onCancel()"></app-pop-up-confirm>
    }
  `,
})
export class MyComponent {
  showConfirm = false;

  onConfirm() {
    console.log("Confirmed!");
    this.showConfirm = false;
    // Perform delete action
  }

  onCancel() {
    console.log("Cancelled");
    this.showConfirm = false;
  }
}
```

**Inputs:**

| Input         | Type     | Default              | Description          |
| ------------- | -------- | -------------------- | -------------------- |
| `title`       | `string` | `''`                 | Modal title          |
| `content`     | `string` | `''`                 | Message content      |
| `imgUrl`      | `string` | `''`                 | Icon/image URL       |
| `colorButton` | `string` | `'var(--brand-600)'` | Confirm button color |

**Outputs:**

| Output         | Type                 | Description            |
| -------------- | -------------------- | ---------------------- |
| `confirmClick` | `EventEmitter<void>` | Emits on confirm click |
| `cancelClick`  | `EventEmitter<void>` | Emits on cancel click  |

---

### Icon Components

#### IconComponent

A flexible icon component supporting icon libraries and custom styling.

**Selector:** `app-icon`

```typescript
import { IconComponent, IconData } from "@goat-bravos/intern-hub-layout";

@Component({
  imports: [IconComponent],
  template: `
    <!-- Using IconData object -->
    <app-icon [iconData]="settingsIcon"></app-icon>

    <!-- Using individual inputs -->
    <app-icon icon="dsi-home-01-line" colorIcon="#3b82f6" width="24px" height="24px" (clicked)="onIconClick()"></app-icon>
  `,
})
export class MyComponent {
  settingsIcon: IconData = {
    icon: "dsi-settings-line",
    colorIcon: "#666666",
    width: "20px",
    height: "20px",
    routerLink: "/settings",
  };

  onIconClick() {
    console.log("Icon clicked");
  }
}
```

**IconData Interface:**

```typescript
interface IconData {
  icon: string;
  colorIcon?: string;
  routerLink?: string;
  width?: string;
  height?: string;
}
```

---

#### FunctionalLabelComponent

A label component with icons and hover effects, commonly used in sidebars.

**Selector:** `app-functional-label`

```typescript
import { FunctionalLabelComponent, IconData } from "@goat-bravos/intern-hub-layout";

@Component({
  imports: [FunctionalLabelComponent],
  template: ` <app-functional-label content="Dashboard" [iconLeft]="dashboardIcon" routerLink="/dashboard" backgroundColor="transparent" backgroundColorHover="#3b82f6" colorContent="#666" colorContentHover="#fff" (clicked)="onLabelClick($event)"></app-functional-label> `,
})
export class MyComponent {
  dashboardIcon: IconData = {
    icon: "dsi-home-01-line",
    colorIcon: "#666",
  };

  onLabelClick(event: Event) {
    console.log("Label clicked", event);
  }
}
```

---

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm 9+
- Angular CLI 21+

### Building the Library

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Build and pack for local testing
npm run pack:lib
```

### Publishing

```bash
# Dry run (test publish)
npm run publish:lib:dry

# Publish to npm
npm run publish:lib
```

### Project Structure

```
intern-hub-fe-layout/
├── src/
│   ├── libs/
│   │   ├── layouts/              # Layout components
│   │   │   ├── header/           # Header component
│   │   │   └── sidebar/          # Sidebar component
│   │   └── shared/
│   │       └── components/       # Shared UI components
│   │           ├── button/       # Button components
│   │           ├── input/        # Input components
│   │           ├── table/        # Table components
│   │           ├── approval/     # Approval list components
│   │           ├── pop-up/       # Pop-up/modal components
│   │           ├── icon/         # Icon component
│   │           └── functional-label/
│   └── public-api.ts             # Public exports
├── ng-package.json               # ng-packagr config
├── package.json
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Author

**Intern Hub Team**

- Repository: [GitHub](https://github.com/FPT-IS-Intern/Intern-Hub-FE-Layout)

---

<div align="center">
  <sub>Built with ❤️ by Intern Hub Team</sub>
</div>
