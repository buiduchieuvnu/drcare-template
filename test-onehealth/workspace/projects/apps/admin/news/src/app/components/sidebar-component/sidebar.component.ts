import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'sidebar-component',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent{
  @Input() isPinned = false;
    @Output() pinChange = new EventEmitter<boolean>();
  
    isHover = false;
    isCollapsed = true;
  
    togglePin() {
      this.isPinned = !this.isPinned;
      this.pinChange.emit(this.isPinned);
    }
  
    onHover(state: boolean) {
      if (!this.isPinned) {
        this.isHover = state;
      }
    }
  
    
    hisSideBarConfig = [
      {
        hisLevel: 1,
        hisTitle: 'Tin tức',
        hisIcon: 'menu',
        hisOpen: true,
        hisDisabled: false,
        hisChildren: [
          {
            hisLevel: 1,
            hisTitle: 'Danh sách tin tức',
            hisIcon: 'bars',
            hisLink: '/news/news-list',
            hisDisabled: false
          },
          {
            hisLevel: 1,
            hisTitle: 'Chuyên mục tin',
            hisIcon: 'bars',
            hisLink: '/news/news-category',
            hisDisabled: false
          }
        ]
      },
    ];
}
