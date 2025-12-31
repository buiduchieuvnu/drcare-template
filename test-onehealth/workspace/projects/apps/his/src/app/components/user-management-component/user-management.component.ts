import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { PatientRow } from '../../../models/patient.model';
import { PatientContextService } from '../../../service/patient-context.service';
import { UserManagement } from '../../../models/user-management.model';
import { UserRole } from '../../../models/user-manage-role.model';

@Component({
  selector: 'user-managementt-component',
  standalone: false,
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  checked = false;

  listOfData: UserManagement[] = [];
  filteredData: UserManagement[] = [];
  listOfCurrentPageData: UserManagement[] = [];

  selectedRow: UserManagement | null = null;

  search = {
    roleName: '',
    userCode: '',
    userName: '',
    userGroup: ''
  };
  ALL_ROLES: UserRole[] = [
    { code: 'C1', name: 'Phân quyền Control', icon: 'system', color: 'success' },
    { code: 'BC', name: 'Phân quyền Report', icon: 'bar-chart4', color: 'warning'},
    { code: 'QL', name: 'Phân quyền Menu', icon: 'fabric-open-folder-horizontal', color: 'primary' },
    { code: 'PQ', name: 'Phân quyền dữ liệu', icon: 'entitlement-policy', color: 'danger' }
  ];
  ngOnInit(): void {
    this.listOfData = this.generateMockData(30);
    this.filteredData = [...this.listOfData];
  }

  onCurrentPageDataChange(data: readonly UserManagement[]): void {
    this.listOfCurrentPageData = [...data];
  }

  generateMockData(count: number): UserManagement[] {
    const groups = [
      'KHOA DƯỢC (QL)',
      'KHOA KHÁM BỆNH',
      'PHÒNG TÀI CHÍNH',
      'PHÒNG CNTT'
    ];

    return Array.from({ length: count }).map((_, i) => {
      const roleCount = Math.floor(Math.random() * 4) + 1;

      return {
        id: i + 1,
        userCode: 'ANHHV.VNPT',
        userName: 'Âu Thị Nhàn',
        userGroup: groups[i % groups.length],
        roles: this.shuffle([...this.ALL_ROLES]).slice(0, roleCount)
      };
    });
  }
  shuffle(arr: any[]) {
    return arr.sort(() => 0.5 - Math.random());
  }


  applyFilter(): void {
    this.filteredData = this.listOfData.filter(item =>
      Object.keys(this.search).every(key => {
        const value = this.search[key];
        if (!value) return true;
        if (key === 'roleName') {
          return item.roles.some(r =>
            r.name.toLowerCase().includes(value.toLowerCase())
          );
        }

        return String(item[key] ?? '')
          .toLowerCase()
          .includes(value.toLowerCase());
      })
    );
  }

  selectRow(row: UserManagement): void {
    if (this.selectedRow?.id === row.id) {
      this.selectedRow = null;
      return;
    }
    this.selectedRow = row;
  }


}