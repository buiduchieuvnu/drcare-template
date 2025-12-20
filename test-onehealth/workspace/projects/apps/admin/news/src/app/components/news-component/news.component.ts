import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'news-component',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
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
    { path: 'news-list', label: 'Danh sách tin tức', icon: "ordered-list" },
    { path: 'news-category', label: 'Chuyên mục tin', icon: "folder-open" },
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
