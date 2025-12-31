import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NewsActionStateService } from '../../../service/news-action.service';
@Component({
  selector: 'news-component',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
constructor(
  private router: Router,
  private actionState: NewsActionStateService
) {}

ngOnInit() {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.actionState.setEditRoute(
        this.router.url.includes('/news/edit')
      );
    }
  });
}

}
