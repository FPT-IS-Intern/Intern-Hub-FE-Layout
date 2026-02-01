import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  template: `
    <div class="demo-container">
      <aside class="demo-sidebar">
        <h1>Component Library</h1>
        <p class="subtitle">Preview & Documentation</p>
        
        <nav>
          <a routerLink="/layout" routerLinkActive="active">
            <i class="dsi dsi-layout-top-solid"></i>
            Layout Components
          </a>
          <a routerLink="/icon" routerLinkActive="active">
            <i class="dsi dsi-star-solid"></i>
            Icons & Labels
          </a>
          <a routerLink="/button" routerLinkActive="active">
            <i class="dsi dsi-cursor-click-line"></i>
            Buttons
          </a>
          <a routerLink="/input" routerLinkActive="active">
            <i class="dsi dsi-edit-box-line"></i>
            Inputs
          </a>
          <a routerLink="/table" routerLinkActive="active">
            <i class="dsi dsi-table-line"></i>
            Tables
          </a>
          <a routerLink="/approval" routerLinkActive="active">
            <i class="dsi dsi-checkbox-circle-line"></i>
            Approval List
          </a>
          <a routerLink="/popup" routerLinkActive="active">
            <i class="dsi dsi-alert-line"></i>
            Pop-ups
          </a>
        </nav>
      </aside>
      
      <main class="demo-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Component Library Demo';
}
