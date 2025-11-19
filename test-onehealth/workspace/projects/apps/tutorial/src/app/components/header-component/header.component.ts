import { Component, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'header-component',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private router: Router, private eRef: ElementRef) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.menuOpen = false;
      });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // 🔥 Bắt sự kiện click toàn trang
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    // Nếu click nằm ngoài phần navbar thì đóng menu
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.menuOpen = false;
    }
  }

}
