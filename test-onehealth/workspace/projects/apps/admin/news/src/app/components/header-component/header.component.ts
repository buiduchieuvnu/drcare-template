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
  ) {}
  ngOnInit() {
    this.user = this.auth.getUser();
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
}
