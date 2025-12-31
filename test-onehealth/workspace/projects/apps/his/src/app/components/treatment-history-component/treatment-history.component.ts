import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { MedicalHistoryRow } from '../../../models/medical-history.model';
import { TreatmentHistoryRow } from '../../../models/treatment-history.model';

@Component({
  selector: 'treatment-history-component',
  standalone: false,
  templateUrl: './treatment-history.component.html',
  styleUrls: ['./treatment-history.component.css']
})
export class TreatmentHistoryComponent {
  listOfData: MedicalHistoryRow[] = [];
  filteredData: MedicalHistoryRow[] = [];
  listOfCurrentPageData: MedicalHistoryRow[] = [];

  search = {
    facilityName: '',
    visitDate: ''
  };

  ngOnInit(): void {
    this.listOfData = this.generateMockData(50);
    this.filteredData = [...this.listOfData];

    this.listOfDataXN = this.generateMockDataXN(40);
    this.filteredDataXN = [...this.listOfDataXN];
  }
  onCurrentPageDataChange(data: readonly MedicalHistoryRow[]): void {
    this.listOfCurrentPageData = [...data];
  }
  generateMockData(count: number): MedicalHistoryRow[] {
    const facilities = [
      'BV Bạch Mai',
      'BV Chợ Rẫy',
      'BV Đại học Y Dược',
      'PK Đa khoa 103',
      'PK Tim mạch Trung ương'
    ];

    return Array.from({ length: count }).map((_, i) => ({
      id: i + 1,
      facilityName: facilities[i % facilities.length],
      visitDate: new Date(
        Date.now() - i * 24 * 60 * 60 * 1000
      ).toISOString()
    }));
  }

  /* ===== FILTER ===== */
  applyFilter(): void {
    this.filteredData = this.listOfData.filter(item =>
      (!this.search.facilityName ||
        item.facilityName
          .toLowerCase()
          .includes(this.search.facilityName.toLowerCase())) &&
      (!this.search.visitDate ||
        item.visitDate.includes(this.search.visitDate))
    );
  }


  listOfDataXN: TreatmentHistoryRow[] = [];
  filteredDataXN: TreatmentHistoryRow[] = [];
  listOfCurrentPageDataXN: TreatmentHistoryRow[] = [];

searchXN = {
  barcode: '',
  receiptNo: '',
  treatmentNo: '',
  department: '',
  room: '',
  executedAt: ''
};

onCurrentPageDataChangeXN(data: readonly TreatmentHistoryRow[]): void {
  this.listOfCurrentPageDataXN = [...data];
}

generateMockDataXN(count: number): TreatmentHistoryRow[] {
  const departments = ['Khoa Nội', 'Khoa Ngoại', 'Khoa Tim mạch'];
  const rooms = ['PK Nội', 'PK Ngoại', 'PK Tim'];

  return Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    status: i % 2 === 0 ? 'done' : 'pending',
    signed: i % 3 === 0,

    barcode: `00${i + 1}`,
    receiptNo: `2412110000${i}`,
    treatmentNo: `P00000${500 + i}`,
    department: departments[i % departments.length],
    room: rooms[i % rooms.length],
    executedAt: new Date(Date.now() - i * 3600000).toISOString()
  }));
}

applyFilterXN(): void {
  this.filteredDataXN = this.listOfDataXN.filter(item =>
    (!this.searchXN.barcode || item.barcode.includes(this.searchXN.barcode)) &&
    (!this.searchXN.receiptNo || item.receiptNo.includes(this.searchXN.receiptNo)) &&
    (!this.searchXN.treatmentNo || item.treatmentNo.includes(this.searchXN.treatmentNo)) &&
    (!this.searchXN.department || item.department.includes(this.searchXN.department)) &&
    (!this.searchXN.room || item.room.includes(this.searchXN.room)) &&
    (!this.searchXN.executedAt || item.executedAt.includes(this.searchXN.executedAt))
  );
}

}