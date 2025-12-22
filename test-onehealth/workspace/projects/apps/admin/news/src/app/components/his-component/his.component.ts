import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'his-component',
  standalone: false,
  templateUrl: './his.component.html',
  styleUrls: ['./his.component.css']
})
export class HisComponent {
   isMenuCollapsed: boolean = false;
    isOpen = false;
    isActive = false;
  
    canEdit = false;
    canDelete = false;
    canSave = false;
    isEditRoute = false;
    selectedIds: number[] = [];
    constructor(private router: Router) { }
  
    updateActionState(): void {
      this.canEdit = this.selectedIds.length === 1;
      this.canDelete = this.selectedIds.length >= 1;
      this.canSave = this.isEditRoute;
    }
  
    onEdit() {
      if (this.selectedIds.length === 1) {
        this.router.navigate(['/news/edit', this.selectedIds[0]]);
      }
    }
    onDelete() {
      if (!this.canDelete) return;
      const confirmDelete = alert(
        `Xóa ${this.selectedIds.length} tin tức đã chọn`
      );
      this.selectedIds = [];
      this.router.navigate(['/news/news-list']);
    }
  
    onSave() {
      if (!this.isEditRoute) return;
  
      alert('Lưu tin tức thành công');
      this.router.navigate(['/news/news-list']);
    }
  
  
    onActivate(component: any) {
      Promise.resolve().then(() => {
        if (component.selectionChange) {
          component.selectionChange.subscribe((ids: number[]) => {
            this.selectedIds = ids;
            this.updateActionState();
          });
        }
  
        this.isEditRoute =
          component.constructor.name === 'NewsEditComponent';
  
        this.updateActionState();
      });
    }
  
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
  
}
