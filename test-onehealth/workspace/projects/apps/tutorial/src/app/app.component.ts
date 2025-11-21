import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
    constructor(private router: Router) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  ngAfterViewInit() {
    // Đảm bảo header đã render xong
    setTimeout(() => this.updateBodyPadding(), 100);
  }

  @HostListener('window:resize')
  onResize() {
    this.updateBodyPadding();
  }

  private updateBodyPadding() {
    const header = document.getElementById('main-header');
    const pageContent = document.querySelector('.page-content');

    if (header && pageContent) {
      const headerHeight = header.offsetHeight;
      (pageContent as HTMLElement).style.paddingTop = `${headerHeight}px`;
      console.log('Header height:', headerHeight);
    } else {
      console.warn('Không tìm thấy header hoặc page-content');
    }
  }

}
