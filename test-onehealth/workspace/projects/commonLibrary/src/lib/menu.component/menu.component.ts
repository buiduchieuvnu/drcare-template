import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'submenu-comp',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class SubMenuComponent implements OnInit {
  @Input() menuConfig: any[];

  @Output() itemClick = new EventEmitter<any>();

  activeRouter: string;

  openNewTab(url: any): void {
    window.open(url, '_blank');
  }
  constructor(private router: Router) {
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.activeRouter = data.url.toLowerCase();
      }
    });
  }

  ngOnInit() {}

  onClick(event: any) {
    this.itemClick.emit(event);
    if (event.redirectUrl) {
      this.openNewTab(event.redirectUrl);
    }
  }
}
