import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'sidebar-component',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent  implements OnInit{
  activeRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
  }
  showApps = false;

  @ViewChild('appsPanel') appsPanel!: ElementRef;

  toggleApps() {
    this.showApps = !this.showApps;
  }

  // Click ra ngoài thì đóng
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.showApps) return;

    const target = event.target as HTMLElement;

    if (
      !this.appsPanel?.nativeElement.contains(target) &&
      !target.closest('.apps')
    ) {
      this.showApps = false;
    }
  }
}
