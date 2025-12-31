import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-his',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
isSidebarPinned = false;

  onToggleSidebarPin(pinned: boolean) {
    this.isSidebarPinned = pinned;
  }
  isRightbarOpen = false;

  onToggleRightbar() {
    this.isRightbarOpen = !this.isRightbarOpen;
  }
}
