import { Component, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'header-component',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private router: Router) {}

  isNgoaiTruActive(): boolean {
    return (
      this.router.url.startsWith('/registration')
    );
  }
  itemMenu = [
    {
      menuName: 'Hồ sơ cá nhân',
      icon: 'user',
      route: ''
    },
    {
      menuName: 'Đổi mật khẩu',
      icon: 'lock',
      route: ''
    },
    {
      menuName: 'Đăng Xuất',
      icon: 'logout',
      route: '/his/overview/vi',
      click: () => {
        console.log('Logout button clicked');
        alert("Thực hiện logic đăng xuất tại đây")
        // Thực hiện logic đăng xuất tại đây
      }
    }
  ];

  information = {
    Name:"Nguyễn Xuân Bình",
    NumberPhone:"0987898767",
    Hospital:"Bệnh viện Bưu điện(HN)",
    Avatar:"https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg"
  }
  // menus: any[] = [];
  meuns2: any[] = []
  menus = [
    {
      level: 1,
      title: 'Trang chủ',
      open: true,
      selected: false,
      disabled: false,
      route:'/trang-chu'
    },
    {
      level: 1,
      title: 'Ngoại trú',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Tiếp nhận khám bệnh',
          selected: false,
          disabled: false,
          route: '',
         
        },
        {
          level: 2,
          title: 'Khám bệnh',
          selected: false,
          disabled: false,
          route: '/ngt/kb/ds-khambenh',
        },
      ],
    },
    {
      level: 1,
      title: 'Viện phí và bảo hiểm',
      selected: false,
      disabled: false,
      route:'/trangchu'
    },
    {
      level: 1,
      title: 'Cận lâm sàng & Module khác',
      selected: false,
      disabled: false,
    },
    {
      level: 1,
      title: 'Nội trú',
      icon: 'caret-down',
      selected: true,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'User 1',
          icon: 'user',
          selected: false,
          disabled: false,
          route: '/team-group/user-1',
        },
        {
          level: 2,
          title: 'User 2',
          icon: 'user',
          selected: false,
          disabled: false,
          route: '/team-group/user-2',
        },
      ],
    },
    {
      level: 1,
      title: 'Dược',
      icon: 'caret-down',
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'User 1',
          icon: 'user',
          selected: false,
          disabled: false,
          route: '/team-group/user-1',
        },
        {
          level: 2,
          title: 'User 2',
          icon: 'user',
          selected: false,
          disabled: false,
          route: '/team-group/user-2',
        },
      ],
    },
    {
      level: 1,
      title: 'Báo cáo và tra cứu',
      icon: 'caret-down',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'User 1',
          icon: 'user',
          selected: false,
          disabled: false,
          route: '/team-group/user-1',
        },
        {
          level: 2,
          title: 'User 2',
          icon: 'user',
          selected: false,
          disabled: false,
          route: '/team-group/user-2',
        },
      ],
    },
    {
      level: 1,
      title: 'Danh mục',
      selected: false,
      disabled: false,
    },
    {
      level: 1,
      title: 'Quản trị hệ thống',
      selected: false,
      disabled: false,
    },
  ];
}
