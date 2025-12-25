import { Component} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'head-panel-component',
  standalone: false,
  templateUrl: './head-panel.component.html',
  styleUrls: ['./head-panel.component.css']
})
export class HeaderPanelComponent {
  

  isTiepNhan = false;
  isDanhSach = false;
  pageTitle = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.detectRoute();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.detectRoute());
  }

  private detectRoute() {
    const url = this.router.url;

    this.isTiepNhan = url.includes('/tiepnhan');
    this.isDanhSach = url.includes('/ds-tiepnhan');

    if (this.isTiepNhan) {
      this.pageTitle = 'Tiếp nhận bệnh nhân';
    } else if (this.isDanhSach) {
      this.pageTitle = 'Danh sách tiếp nhận';
    } else {
      this.pageTitle = '';
    }
  }
}
