import { Component, OnInit } from '@angular/core';
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
}
