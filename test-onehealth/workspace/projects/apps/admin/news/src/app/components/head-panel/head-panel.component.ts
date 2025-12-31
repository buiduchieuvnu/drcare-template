import { Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NewsActionStateService } from '../../../service/news-action.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'head-panel-component',
  standalone: false,
  templateUrl: './head-panel.component.html',
  styleUrls: ['./head-panel.component.css']
})
export class HeaderPanelComponent {
  isDanhSachTinTuc = false;
  isChuyenMuc = false;
  pageTitle = '';
  
  canEdit = false;
  canDelete = false;
  canSave = false;
  selectedIds: number[] = [];
  isOpen = false;
  isActive = false;

  constructor(private router: Router,
    private actionState: NewsActionStateService
  ) {}

  ngOnInit(): void {
    this.detectRoute();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.detectRoute());

    combineLatest([
      this.actionState.selectedIds$,
      this.actionState.isEditRoute$
    ]).subscribe(([ids, isEdit]) => {
      this.selectedIds = ids;
      this.canEdit = ids.length === 1;
      this.canDelete = ids.length >= 1;
      this.canSave = isEdit;
    });
  }
  onEdit() {
    if (this.selectedIds.length === 1) {
      this.router.navigate(['/news/edit', this.selectedIds[0]]);
    }
  }

  onDelete() {
    if (!this.canDelete) return;

    alert(`Xóa ${this.selectedIds.length} tin tức đã chọn`);
    this.actionState.resetSelection();
    this.router.navigate(['/news/news-list']);
  }

  onSave() {
    if (!this.canSave) return;

    alert('Lưu tin tức thành công');
    this.router.navigate(['/news/news-list']);
  }

  private detectRoute() {
    const url = this.router.url;

    this.isDanhSachTinTuc = url.includes('/news/news-list');
    this.isChuyenMuc = url.includes('/news/news-category');

    if (this.isDanhSachTinTuc) {
      this.pageTitle = 'Danh sách tin tức';
    } else if (this.isChuyenMuc) {
      this.pageTitle = 'Chuyên mục tin';
    } else {
      this.pageTitle = '';
    }
  }

  isHead = true;
  toggleHead(){
    this.isHead = !this.isHead;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  @ViewChild('dropdownRef') dropdownRef!: ElementRef;
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
  }


}
