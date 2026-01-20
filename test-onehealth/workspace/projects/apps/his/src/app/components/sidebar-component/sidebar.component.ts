import { Component, EventEmitter, Input, Output} from '@angular/core';
@Component({
  selector: 'sidebar-component',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent {
  @Input() isPinned = false;
  @Output() pinChange = new EventEmitter<boolean>();

  isHover = false;
  isCollapsed = true;

  togglePin() {
    this.isPinned = !this.isPinned;
    this.pinChange.emit(this.isPinned);
  }

  onHover(state: boolean) {
    if (!this.isPinned) {
      this.isHover = state;
    }
  }

  
  hisSideBarConfig = [
    {
      hisLevel: 1,
      hisTitle: 'Tiếp nhận',
      hisIcon: 'medicine-box',
      hisOpen: true,
      hisDisabled: false,
      hisChildren: [
        {
          hisLevel: 1,
          hisTitle: 'Tiếp nhận bệnh nhân',
          hisIcon: 'usergroup-add',
          hisLink: '/tiepnhan',
          hisDisabled: false
        },
        {
          hisLevel: 1,
          hisTitle: 'Danh sách tiếp nhận',
          hisIcon: 'bars',
          hisLink: '/ds-tiepnhan',
          hisDisabled: false
        }
      ]
    },
  ];
  hisSideBarConfigQuanTri = [
    {
      hisLevel: 1,
      hisTitle: 'Quản trị hệ thống',
      hisIcon: 'tool',
      hisOpen: true,
      hisDisabled: false,
      hisChildren: [
        {
          hisLevel: 1,
          hisTitle: 'Quản lý người dùng',
          hisIcon: 'user',
          hisLink: '/quan-ly-nguoi-dung',
          hisDisabled: false
        },
        {
          hisLevel: 1,
          hisTitle: 'Quản lý nhân viên',
          hisIcon: 'team',
          hisLink: '/quan-ly-nhan-vien',
          hisDisabled: false
        },
        {
          hisLevel: 1,
          hisTitle: 'Danh sách nhóm người dùng',
          hisIcon: 'user',
          hisLink: '/danh-sach-nhom-nguoi-dung',
          hisDisabled: false
        },
      ]
    },
  ];
}
