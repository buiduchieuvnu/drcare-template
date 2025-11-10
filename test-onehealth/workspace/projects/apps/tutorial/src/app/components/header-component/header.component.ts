import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'header-component',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
