import { Component } from '@angular/core';
import { ListUser } from '../../../models/list-user.model';

import { TransferItem } from '@onehealth/ui/transfer';

interface TabItem {
  key: string;
  title: string;
  type: 'edit' | 'delete' | 'func' | 'action' | 'report';
  row: ListUser;
  closable: boolean;
}

@Component({
  selector: 'list-user-component',
  standalone: false,
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  listOfData: ListUser[] = [];
  filteredData: ListUser[] = [];
  listOfCurrentPageData: ListUser[] = [];

  search = {
    maNhomND: '',
    tenNhomND: '',
    mota: ''
  };

  ngOnInit(): void {
    this.listOfData = this.generateMockData(50);
    this.filteredData = [...this.listOfData];

    // TAB SỬA MẶC ĐỊNH – KHÔNG ĐÓNG
    const defaultEditTab: TabItem = {
      key: 'edit-default',
      type: 'edit',
      title: 'Thông tin chi tiết',
      row: {} as ListUser,
      closable: false
    };

    this.tabs = [defaultEditTab];
    this.activeTabIndex = 0;
    this.activeTab = defaultEditTab;

    // PHÂN QUYỀN CHỨC NĂNG
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        direction: Math.random() * 2 > 1 ? 'right' : undefined
      });
    }
  }
  onCurrentPageDataChange(data: readonly ListUser[]): void {
    this.listOfCurrentPageData = [...data];
  }
  generateMockData(count: number): ListUser[] {
    return Array.from({ length: count }).map((_, i) => ({
      id: i + 1,
      maNhomND: 'NVTD',
      tenNhomND: 'Nhân viên tiếp đón',
      mota: 'Nhân viên tiếp đón ngoại trú',

    }));
  }

  /* ===== FILTER ===== */
  applyFilter(): void {
    this.filteredData = this.listOfData.filter(item =>
      (!this.search.maNhomND || item.maNhomND.toLowerCase().includes(this.search.maNhomND.toLowerCase())) &&
      (!this.search.tenNhomND || item.tenNhomND.includes(this.search.tenNhomND)) &&
      (!this.search.mota || item.mota.includes(this.search.mota))
    );
  }

  hisActionBarEdit = [
    {
      hisTitle: 'Thêm',
      hisId: 'edit-add',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Lưu',
      hisId: 'edit-save',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Hủy',
      hisId: 'edit-cancel',
      hisType: 'default',
      hisDisabled: false
    },
  ]


  tabs: TabItem[] = [];
  activeTabIndex = 0;
  activeTab?: TabItem;

  onTabChange(index: number): void {
    this.activeTabIndex = index;
    this.activeTab = this.tabs[index];
  }

  openTab(type: TabItem['type'], row: ListUser): void {

    if (type === 'edit') {
      const editTab = this.tabs.find(t => t.type === 'edit')!;
      editTab.row = row;

      this.activeTabIndex = this.tabs.indexOf(editTab);
      this.activeTab = editTab;
      return;
    }

    const key = `${type}-${row.id}`;
    const existedIndex = this.tabs.findIndex(t => t.key === key);
    if (existedIndex > -1) {
      this.activeTabIndex = existedIndex;
      this.activeTab = this.tabs[existedIndex];
      return;
    }

    const titleMap = {
      func: `Phân quyền chức năng`,
      action: `Phân quyền thao tác`,
      report: `Phân quyền báo cáo`
    };

    const newTab: TabItem = {
      key,
      type,
      title: titleMap[type],
      row,
      closable: true
    };

    this.tabs.push(newTab);
    this.activeTabIndex = this.tabs.length - 1;
    this.activeTab = newTab;
  }


  closeTab({ index }: { index: number }): void {
    const tab = this.tabs[index];
    if (!tab.closable) return;

    this.tabs.splice(index, 1);

    if (this.tabs.length) {
      const newIndex = Math.max(0, index - 1);
      this.activeTabIndex = newIndex;
      this.activeTab = this.tabs[newIndex];
    } else {
      this.activeTab = undefined;
    }
  }


  // PHÂN QUYỀN CHỨC NĂNG
  list: TransferItem[] = [];
  disabled = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filterOption(inputValue: string, item: any): boolean {
    return item.description.indexOf(inputValue) > -1;
  }

  searchCN(ret: {}): void {
    console.log('ohSearchChange', ret);
  }

  select(ret: {}): void {
    console.log('ohSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('ohChange', ret);
  }

}