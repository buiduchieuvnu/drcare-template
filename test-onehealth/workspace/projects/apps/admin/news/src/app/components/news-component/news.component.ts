import { Component } from '@angular/core';
import { NewsListComponent } from '../news-list-component/news-list.component';
import { NewsSectionComponent } from '../news-section-component/news-section.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'news-component',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  isMenuCollapsed: boolean = false;
  activeTab: string = 'home';

  selectTab(tab: string) {
    this.activeTab = tab;
  }
  menuItems = [
    { path: 'news-list', label: 'Danh sách tin tức' },
    { path: 'news-section', label: 'Chuyên mục tin' },
  ];

  toggleMenu() {
  this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
