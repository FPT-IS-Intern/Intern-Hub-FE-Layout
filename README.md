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
- [Usage Examples](#-usage-examples)
- [Components API Reference](#-components-api-reference)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 🎨 **Pre-built Layouts** - Main layout with sidebar and header components
- 🧩 **Reusable UI Components** - Buttons, inputs, tables, and more
- 🔧 **Highly Configurable** - Route-based configuration via Angular Router
- 📦 **Standalone Components** - Modern Angular standalone component architecture
- 🎯 **TypeScript Support** - Full type definitions included
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
| `@angular/router` | ^21.0.0 | ✅ Yes      |
| `dynamic-ds`      | ^1.0.0  | ⚠️ Optional |

Install peer dependencies if not already present:

```bash
npm install @angular/common @angular/core @angular/router dynamic-ds
```

---

## 🚀 Quick Start

### Step 1: Enable Component Input Binding

Add `withComponentInputBinding()` to your `app.config.ts` to enable route-based configuration:

```typescript
// src/app/app.config.ts
import { ApplicationConfig } from "@angular/core";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding())],
};
```

### Step 2: Configure Routes with Layout

Set up the `MainLayoutComponent` as your app shell:

```typescript
// src/app/app.routes.ts
import { Routes } from "@angular/router";
import { MainLayoutComponent } from "@goat-bravos/intern-hub-layout";

export const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    data: {
      sidebarItems: [
        { icon: "dsi-home-01-line", content: "Home" },
        { icon: "dsi-map-01-line", content: "Roadmap" },
        { icon: "dsi-file-01-line", content: "Documents" },
      ],
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./pages/home/home.component").then((m) => m.HomeComponent),
      },
      {
        path: "roadmap",
        loadComponent: () => import("./pages/roadmap/roadmap.component").then((m) => m.RoadmapComponent),
      },
    ],
  },
];
```

---

## 📝 Usage Examples

### Using Button Components

```typescript
import { Component } from "@angular/core";
import { ButtonContainerComponent, LabelButtonComponent } from "@goat-bravos/intern-hub-layout";

@Component({
  selector: "app-example",
  standalone: true,
  imports: [ButtonContainerComponent, LabelButtonComponent],
  template: `
    <app-button-container content="Primary Action" size="lg" backgroundColor="var(--brand-500)" (buttonClick)="onAction()"> </app-button-container>

    <app-label-button label="Status: Active" bgColor="#22c55e" textColor="#ffffff"> </app-label-button>
  `,
})
export class ExampleComponent {
  onAction() {
    console.log("Button clicked!");
  }
}
```

### Using Input Components

```typescript
import { Component } from "@angular/core";
import { InputTextComponent, InputCalendarComponent } from "@goat-bravos/intern-hub-layout";

@Component({
  selector: "app-form-example",
  standalone: true,
  imports: [InputTextComponent, InputCalendarComponent],
  template: `
    <app-input-text headerInput="Username" placeholder="Enter username" [required]="true" [maxLength]="50" [showLimit]="true" [(value)]="username" (valueChange)="onUsernameChange($event)"> </app-input-text>

    <app-input-calendar headerInput="Start Date" placeholder="dd/mm/yyyy" [(value)]="startDate"> </app-input-calendar>
  `,
})
export class FormExampleComponent {
  username = "";
  startDate = "";

  onUsernameChange(value: string) {
    console.log("Username:", value);
  }
}
```

### Using Table Components

```typescript
import { Component } from "@angular/core";
import { TableHeaderComponent, TableBodyComponent, ColumnConfig } from "@goat-bravos/intern-hub-layout";

@Component({
  selector: "app-table-example",
  standalone: true,
  imports: [TableHeaderComponent, TableBodyComponent],
  template: `
    <table>
      <thead>
        <tr app-table-header [columns]="columns" backgroundColor="#1e293b" textColor="#ffffff"></tr>
      </thead>
      <tbody app-table-body [columns]="columns" [rows]="data"></tbody>
    </table>
  `,
})
export class TableExampleComponent {
  columns: ColumnConfig[] = [
    { header: "ID", key: "id", width: "80px" },
    { header: "Name", key: "name", width: "200px" },
    { header: "Status", key: "status", width: "120px" },
  ];

  data = [
    { id: 1, name: "John Doe", status: "Active" },
    { id: 2, name: "Jane Smith", status: "Pending" },
  ];
}
```

---

## 📚 Components API Reference

### Layout Components

#### `MainLayoutComponent`

The main application shell with integrated sidebar and header.

| Selector       | `app-main-layout`                            |
| -------------- | -------------------------------------------- |
| **Inputs**     |                                              |
| `sidebarItems` | `SidebarItem[]` - List of sidebar menu items |

```typescript
interface SidebarItem {
  icon: string; // Icon class name (e.g., 'dsi-home-01-line')
  content: string; // Display text for the menu item
}
```

---

#### `SidebarComponent`

Standalone sidebar navigation component.

| Selector    | `app-sidebar`                                   |
| ----------- | ----------------------------------------------- |
| **Inputs**  |                                                 |
| `menuItems` | `SidebarItem[]` - List of menu items to display |

---

#### `HeaderComponent`

Standalone header component.

| Selector | `app-header` |
| -------- | ------------ |

---

### Button Components

#### `ButtonContainerComponent`

Customizable button with icon support.

| Selector          | `app-button-container`                                         |
| ----------------- | -------------------------------------------------------------- |
| **Inputs**        |                                                                |
| `size`            | `'xs' \| 'sm' \| 'md' \| 'lg'` - Button size (default: `'md'`) |
| `content`         | `string` - Button text                                         |
| `leftIcon`        | `string` - Left icon class                                     |
| `rightIcon`       | `string` - Right icon class                                    |
| `color`           | `string` - Text color (default: `var(--brand-100)`)            |
| `backgroundColor` | `string` - Background color (default: `var(--utility-900)`)    |
| `borderColor`     | `string` - Border color (default: `var(--brand-100)`)          |
| `fontSize`        | `string` - Custom font size                                    |
| **Outputs**       |                                                                |
| `buttonClick`     | `EventEmitter<any>` - Fires when button is clicked             |

---

#### `LabelButtonComponent`

Small label/badge style button.

| Selector      | `app-label-button`                            |
| ------------- | --------------------------------------------- |
| **Inputs**    |                                               |
| `label`       | `string` - Display text                       |
| `bgColor`     | `string` - Background color                   |
| `borderColor` | `string` - Border color                       |
| `textColor`   | `string` - Text color                         |
| `width`       | `string` - Component width (default: `100%`)  |
| `height`      | `string` - Component height (default: `28px`) |

---

### Input Components

#### `InputTextComponent`

Standard text input with label and validation support.

| Selector      | `app-input-text`                                  |
| ------------- | ------------------------------------------------- |
| **Inputs**    |                                                   |
| `headerInput` | `string` - Label text above input                 |
| `placeholder` | `string` - Placeholder text                       |
| `value`       | `string` - Input value (two-way binding)          |
| `readonly`    | `boolean` - Read-only state                       |
| `required`    | `boolean` - Shows required indicator              |
| `width`       | `string` - Container width (default: `100%`)      |
| `maxLength`   | `number` - Maximum characters (0 = unlimited)     |
| `showLimit`   | `boolean` - Show character count                  |
| `icon`        | `string` - Icon class for input                   |
| `typeInput`   | `string` - Input type (default: `'text'`)         |
| **Outputs**   |                                                   |
| `valueChange` | `EventEmitter<string>` - Fires on value change    |
| `iconClick`   | `EventEmitter<void>` - Fires when icon is clicked |

---

#### `InputStepperComponent`

Numeric input with increment/decrement controls.

| Selector      | `app-input-stepper`                                    |
| ------------- | ------------------------------------------------------ |
| **Inputs**    |                                                        |
| `headerInput` | `string` - Label text                                  |
| `value`       | `number` - Current value                               |
| `min`         | `number` - Minimum value (default: `0`)                |
| `max`         | `number` - Maximum value (default: `100`)              |
| `step`        | `number` - Step increment (default: `1`)               |
| `state`       | `'default' \| 'negative' \| 'positive'` - Visual state |
| `helperText`  | `string` - Helper text below input                     |
| `readonly`    | `boolean` - Read-only state                            |
| `required`    | `boolean` - Required state                             |
| `disabled`    | `boolean` - Disabled state                             |
| `width`       | `string` - Component width                             |
| **Outputs**   |                                                        |
| `valueChange` | `EventEmitter<number>` - Fires on value change         |

---

#### `InputCalendarComponent`

Date picker input component.

| Selector      | `app-input-calendar`                             |
| ------------- | ------------------------------------------------ |
| **Inputs**    |                                                  |
| `headerInput` | `string` - Label text                            |
| `value`       | `string` - Date value (ISO format: `yyyy-mm-dd`) |
| `placeholder` | `string` - Placeholder (default: `'dd/mm/yyyy'`) |
| `readonly`    | `boolean` - Read-only state                      |
| `required`    | `boolean` - Required state                       |
| `width`       | `string` - Component width                       |
| **Outputs**   |                                                  |
| `valueChange` | `EventEmitter<string>` - Fires on date selection |

---

### Table Components

#### `TableHeaderComponent`

Table header row component.

| Selector          | `tr[app-table-header]` (Attribute selector)      |
| ----------------- | ------------------------------------------------ |
| **Inputs**        |                                                  |
| `columns`         | `ColumnConfig[]` - Column definitions            |
| `backgroundColor` | `string` - Header background                     |
| `textColor`       | `string` - Text color (default: `#ffffff`)       |
| `headerIconLeft`  | `string` - Left icon for headers                 |
| `headerIconRight` | `string` - Right icon for headers                |
| `fontSize`        | `string` - Font size (default: `var(--font-xs)`) |

```typescript
interface ColumnConfig {
  header: string; // Display text
  key: string; // Data property key
  width: string; // CSS width value
}
```

---

#### `TableBodyComponent`

Table body component with template support.

| Selector          | `tbody[app-table-body]` (Attribute selector)          |
| ----------------- | ----------------------------------------------------- |
| **Inputs**        |                                                       |
| `rows`            | `any[]` - Data array                                  |
| `columns`         | `ColumnConfig[]` - Column definitions                 |
| `columnTemplates` | `Record<string, TemplateRef>` - Custom cell templates |

---

### Other Components

#### `ApprovalListComponent`

List component for approval workflows.

| Selector             | `app-approval-list`                        |
| -------------------- | ------------------------------------------ |
| **Inputs**           |                                            |
| `rows`               | `ApprovalListItemInterface[]` - List items |
| `headerContentLeft`  | `string` - Left header text                |
| `headerContentRight` | `string` - Right header text               |
| `width`              | `string` - Component width                 |

---

#### `PopUpConfirmComponent`

Confirmation modal dialog.

| Selector       | `app-pop-up-confirm`              |
| -------------- | --------------------------------- |
| **Inputs**     |                                   |
| `title`        | `string` - Modal title            |
| `content`      | `string` - Message content        |
| `imgUrl`       | `string` - Icon/image URL         |
| `colorButton`  | `string` - Confirm button color   |
| **Outputs**    |                                   |
| `confirmClick` | `EventEmitter` - Fires on confirm |
| `cancelClick`  | `EventEmitter` - Fires on cancel  |

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
│   │   ├── layouts/           # Layout components
│   │   │   ├── main-layout/
│   │   │   ├── sidebar/
│   │   │   └── header/
│   │   └── shared/
│   │       └── components/    # Shared UI components
│   │           ├── button/
│   │           ├── input/
│   │           ├── table/
│   │           ├── approval/
│   │           └── pop-up/
│   └── public-api.ts          # Public exports
├── ng-package.json            # ng-packagr config
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
