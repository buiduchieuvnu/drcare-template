import { Component, HostListener, ElementRef, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { OHDropDownModule } from '@onehealth/ui/dropdown';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { OHLogoModule } from '@onehealth/ui/logo';
import { AuthService } from '../../../service/auth.service';
@Component({
  selector: 'header-component',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // SEARCH
  @ViewChild('searchWrapper') searchWrapper!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  isFocus = false;
  showCategoryMenu = false;
  selectedCategory = 'Tất cả';

  user: any;
  constructor(
    public auth: AuthService,
    private router: Router
  ) { }
  ngOnInit() {
    this.user = this.auth.getUser();

    // 1. mặc định chọn account
    this.selectedLevel1 = this.level1.find(
      item => item.key === 'account'
    );

    // 2. mặc định chọn child đầu tiên
    if (this.selectedLevel1?.children?.length) {
      this.selectedLevel2 = this.selectedLevel1.children[0];
    }
  }

  onFocus() {
    this.isFocus = true;
  }

  clearFocus() {
    this.isFocus = false;
    this.showCategoryMenu = false;
    this.searchInput.nativeElement.value = '';
  }

  toggleCategoryMenu(event: Event) {
    event.stopPropagation();
    this.showCategoryMenu = !this.showCategoryMenu;
  }

  selectCategory(name: string, event: Event) {
    event.stopPropagation();
    this.selectedCategory = name;
    this.showCategoryMenu = false;
    this.isFocus = true;
  }

  // NOTIFICATION
  @Input() active = false;
  @Output() toggleRightbar = new EventEmitter<void>();

  onBellClick() {
    this.toggleRightbar.emit();
  }

  // POPUP SETTING
  isSettingOpen = false;
  onSettingClick() {
    this.isSettingOpen = true;
  }
  closeSetting(event?: Event) {
    if (event) event.stopPropagation();
    this.isSettingOpen = false;
  }

  // POPUP ACCOUNT
  isAccountOpen = false;
  @ViewChild('accountPopup') accountPopup!: ElementRef;
  @ViewChild('accountBtn') accountBtn!: ElementRef;
  toggleAccountMenu() {
    this.isAccountOpen = !this.isAccountOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    // SEARCH
    if (this.searchWrapper && !this.searchWrapper.nativeElement.contains(target)) {
      if (!this.searchInput.nativeElement.value) {
        this.isFocus = false;
      }
      this.showCategoryMenu = false;
    }
    // ACCOUNT POPUP
    if (this.isAccountOpen) {
      const popup = this.accountPopup?.nativeElement;
      const btn = this.accountBtn?.nativeElement;

      if (!btn.contains(target) && !popup.contains(target)) {
        this.isAccountOpen = false;
      }
    }

    //  SETTING: CLICK OUTSIDE TO CLOSE
    if (this.isSettingOpen) {
      const overlayClicked = (target.classList.contains('modal-container'));
      if (overlayClicked) this.isSettingOpen = false;
    }
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  level1 = [
    {
      key: 'account',
      label: 'Tài khoản',
      icon: 'user',
      children: [
        { key: 'account_email', label: 'Tài khoản email' },
        { key: 'sign', label: 'Chữ ký' }
      ]
    },
    {
      key: 'general',
      label: 'Chung',
      icon: 'setting',
      children: [
        { key: 'language', label: 'Ngôn ngữ và thời gian' },
        { key: 'display', label: 'Giao diện' },
        { key: 'notification', label: 'Thông báo' }
      ]
    },
    {
      key: 'mail',
      label: 'Thư',
      icon: 'mail',
      children: [
        { key: 'Arrange', label: 'Bố trí' },
        { key: 'Attachments', label: 'Tệp đính kèm' },
        { key: 'mail_trash', label: 'Thư rác' }
      ]
    }
  ];


  selectedLevel1: any;
  selectedLevel2: any;

  selectLevel1(item: any) {
    this.selectedLevel1 = item;

    // luôn auto select child đầu tiên
    if (item.children?.length) {
      this.selectedLevel2 = item.children[0];
    } else {
      this.selectedLevel2 = null;
    }
  }

  selectLevel2(child: any) {
    this.selectedLevel2 = child;
  }

}
