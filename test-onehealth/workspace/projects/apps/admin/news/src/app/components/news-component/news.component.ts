import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { OHActionBarModule } from '@onehealth/ui/action-bar';
import { NewsListComponent } from '../news-list-component/news-list.component';
import { NewsSectionComponent } from '../news-section-component/news-section.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'news-component',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
isMenuCollapsed: boolean = false;

toggleMenu() {
  this.isMenuCollapsed = !this.isMenuCollapsed;
}

menuItems = [
  { path: 'news-list', label: 'Danh sách tin tức' },
  { path: 'news-section', label: 'Chuyên mục tin' },
];

  isOpen = false;
  @ViewChild('dropdownRef') dropdownRef!: ElementRef;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  // Đóng popup khi click ra ngoài
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.dropdownRef && !this.dropdownRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
