import { Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'his-component',
  standalone: false,
  templateUrl: './his.component.html',
  styleUrls: ['./his.component.css']
})
export class HisComponent implements OnInit {
  isMenuCollapsed: boolean = false;
  isOpen = false;
  isActive = false;
  constructor(private router: Router) { }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  menuItems = [
    { path: 'tiepnhan', label: 'Tiếp nhận bệnh nhân', icon: "ordered-list" },
    { path: 'ds-tiepnhan', label: 'Danh sách tiếp nhận bệnh nhân', icon: "folder-open" },
  ];
  @ViewChild('dropdownRef') dropdownRef!: ElementRef;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onMenuSecondClick(event: Event) {
    event.stopPropagation();
    this.isActive = !this.isActive;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;

    /* đóng dropdown arrow */
    if (
      this.dropdownRef &&
      !this.dropdownRef.nativeElement.contains(target)
    ) {
      this.isOpen = false;
    }

    this.isActive = false;

  }

  currentPage: 'tiepnhan' | 'danhsach' | null = null;

  ngOnInit(): void {
    this.detectPage(this.router.url);

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.detectPage(e.urlAfterRedirects);
      });
  }

  private detectPage(url: string) {
    if (url.includes('/his/ds-tiepnhan')) {
      this.currentPage = 'danhsach';
    } else if (url.includes('/his/tiepnhan')) {
      this.currentPage = 'tiepnhan';
    } else {
      this.currentPage = null;
    }
  }

}
