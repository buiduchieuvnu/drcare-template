import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {

isRightbarOpen = false;

onToggleRightbar() {
  this.isRightbarOpen = !this.isRightbarOpen;
}

  
}
