import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout-admin-component',
  standalone: false,
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent {
  isRightbarOpen = false;

  onToggleRightbar() {
    this.isRightbarOpen = !this.isRightbarOpen;
  }
  
}
