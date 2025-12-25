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

  togglePin() {
    this.isPinned = !this.isPinned;
    this.pinChange.emit(this.isPinned);
  }

  onHover(state: boolean) {
    if (!this.isPinned) {
      this.isHover = state;
    }
  }

  isCollapsed = true;
  
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
          hisIcon: 'bars',
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
}
