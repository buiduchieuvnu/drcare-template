import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { PatientRow } from '../../../models/patient.model';
import { PatientContextService } from '../../../service/patient-context.service';

@Component({
  selector: 'registration-list-component',
  standalone: false,
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent {
listOfData: PatientRow[] = [];
filteredData: PatientRow[] = [];
listOfCurrentPageData: PatientRow[] = [];

onCurrentPageDataChange(data: readonly PatientRow[]): void {
  this.listOfCurrentPageData = [...data];
}

search = {
  objectType: '',
  patientCode: '',
  patientId: '',
  patientName: '',
  birthDate: '',
  gender: '',
  bhyt: '',
  cccd: '',
  receivedAt: '',
  clinic: ''
};

ngOnInit(): void {
  this.listOfData = this.generateMockData(50);
  this.filteredData = [...this.listOfData];
}
/* ===== MOCK DATA ===== */
generateMockData(count: number): PatientRow[] {
  const clinics = ['PK Nội (103)', 'PK Ngoại (201)', 'PK Tim mạch', 'PK Nhi'];
  const names = ['Nguyễn Văn A', 'Trần Thị B', 'Lê Minh C', 'Phạm Thị D'];

  return Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    status: ['pending', 'doing', 'done'][i % 3] as any,
    cls: ['none', 'doing', 'done'][i % 3] as any,
    objectType: i % 2 === 0 ? 'number' : 'vncare',

    patientCode: `BA23${100000 + i}`,
    patientId: `BN${200000 + i}`,
    patientName: names[i % names.length].toUpperCase(),

    birthDate: new Date(1960 + (i % 40), i % 12, i % 28).toISOString(),
    gender: i % 2 === 0 ? 'Nam' : 'Nữ',

    bhyt: `DN${Math.floor(Math.random() * 1e11)}`,
    cccd: `${Math.floor(100000000000 + Math.random() * 9e11)}`,

    receivedAt: new Date(Date.now() - i * 3600000).toISOString(),
    clinic: clinics[i % clinics.length]
  }));
}

/* ===== ICON MAP ===== */
getStatusIcon(status: string): string {
  return {
    pending: 'clock',
    doing: 'circle-fill',
    done: 'box-checkmark-solid'
  }[status] || 'clock';
}

getStatusColor(status: string): string {
  return {
    pending: 'primary',
    doing: 'danger',
    done: 'success'
  }[status] || 'default';
}

getStatusLabel(status: string): string {
  return {
    pending: 'Chờ khám',
    doing: 'Đang khám',
    done: 'Đã khám'
  }[status] || '';
}

getClsColor(cls: string): string {
  return cls === 'done'
    ? 'warning'
    : cls === 'doing'
    ? '#color'
    : '#color';
}

/* ===== FILTER ===== */
applyFilter(): void {
  this.filteredData = this.listOfData.filter(item =>
    Object.keys(this.search).every(key =>
      !this.search[key] ||
      String(item[key] ?? '')
        .toLowerCase()
        .includes(this.search[key].toLowerCase())
    )
  );
}
selectedRow: PatientRow | null = null;

constructor(private patientCtx: PatientContextService) {}

selectRow(row: PatientRow) {
  if (this.selectedRow?.id === row.id) {
    this.selectedRow = null;
    this.patientCtx.clear();
    return;
  }
  this.selectedRow = row;
  this.patientCtx.set(row);
}


}