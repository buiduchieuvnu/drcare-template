import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { LabRow } from '../../../models/lab.model';
import { ServiceDesignation } from '../../../models/service-designation.model';
interface PatientRow {
  id: number;
  status: 'pending' | 'doing' | 'done';
  cls: 'none' | 'doing' | 'done';
  objectType: 'number' | 'vncare';
  patientCode: string;
  patientId: string;
  patientName: string;
  birthDate: string;
  gender: 'Nam' | 'Nữ';
  bhyt: string;
  cccd: string;
  receivedAt: string;
  clinic: string;
}


@Component({
  selector: 'service-designation-component',
  standalone: false,
  templateUrl: './service-designation.component.html',
  styleUrls: ['./service-designation.component.css']
})
export class ServiceDesignationComponent {
  // DANH SÁCH XÉT NGHIỆM
  hisActionBarXetNghiem = [
    {
      hisTitle: 'Cập nhật phiếu',
      hisIcon: 'edit',
      hisId: 'update-vote',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Xử lý yêu cầu',
      hisId: 'request',
      hisType: 'primary',
      hisDisabled: false,
      hisChildren: [
        {
          hisTitle: 'Gửi yêu cầu',
          hisType: 'default',
          hisId: 'request1',
          hisDisabled: false,
        },
        {
          hisTitle: 'Hủy yêu cầu',
          hisType: 'default',
          hisId: 'request2',
          hisDisabled: false,
        },
      ]
    },
    {
      hisTitle: 'In phiếu',
      hisId: 'print',
      hisType: 'primary',
      hisDisabled: false,
      hisChildren: [
        {
          hisTitle: 'In phiếu',
          hisType: 'default',
          hisId: 'print1',
          hisDisabled: false,
        },
        {
          hisTitle: 'In kết quả',
          hisType: 'default',
          hisId: 'print2',
          hisDisabled: false,
        },
      ]
    },
    {
      hisTitle: 'Ký số',
      hisId: 'signature',
      hisType: 'primary',
      hisDisabled: false,
      hisChildren: [
        {
          hisTitle: 'Ký số phiếu',
          hisType: 'default',
          hisId: 'signature1',
          hisDisabled: false,
        },
        {
          hisTitle: 'Hủy ký số',
          hisType: 'default',
          hisId: 'signature2',
          hisDisabled: false,
        },
        {
          hisTitle: 'Ký số phiếu phiếu kết quả',
          hisType: 'default',
          hisId: 'signature3',
          hisDisabled: false,
        },
        {
          hisTitle: 'Hủy ký số phiếu kết quả',
          hisType: 'default',
          hisId: 'signature4',
          hisDisabled: false,
        },
      ]
    }
  ];

  listOfData: LabRow[] = [];
  filteredData: LabRow[] = [];

  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  listOfCurrentPageData: readonly LabRow[] = [];

  search: any = {};

  ngOnInit(): void {
    // Xét nghiệm
    this.listOfData = this.generateMockData(40);
    this.filteredData = [...this.listOfData];
    // Dịch vụ chỉ định
    this.testOrderData = this.generateTestOrderData(12);
    this.filteredTestOrderData = [...this.testOrderData];
  }

  generateMockData(count: number): LabRow[] {
    return Array.from({ length: count }).map((_, i) => ({
      id: i + 1,

      barcode: '00056',
      soPhieu: `BN24215923${i}`,
      phieuDieuTri: `P00000${500 + i}`,

      bacSiChiDinh: ['LÊ HOÀNG TUẤN', 'LÊ MINH CHÂU', 'TRẦN THỊ BÍCH'][i % 3],
      tgChiDinh: '29/04/2024 - 10:14:25',

      phongThucHien: 'Phòng khám số 1',
      sttThucHien: i + 1,

      phongKham: 'Phòng A',
      phongChuyenKhoa: 'Phòng khám nội',

      tinhTrang: i % 2 === 0 ? 'binhthuong' : 'kem',
      trangThai: i % 2 === 0 ? 'dagui' : 'chuagui',

      icon1: Math.random() > 0.5 ? 'ok' : 'minus'
    }));
  }

  /* ===== CHECKBOX ===== */
  onItemChecked(id: number, checked: boolean): void {
    checked ? this.setOfCheckedId.add(id) : this.setOfCheckedId.delete(id);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item =>
      value ? this.setOfCheckedId.add(item.id) : this.setOfCheckedId.delete(item.id)
    );
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange(data: readonly LabRow[]): void {
    this.listOfCurrentPageData = data;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const total = this.listOfCurrentPageData.length;
    const checkedCount = this.listOfCurrentPageData.filter(item =>
      this.setOfCheckedId.has(item.id)
    ).length;

    this.checked = total > 0 && checkedCount === total;
    this.indeterminate = checkedCount > 0 && checkedCount < total;
  }

  /* ===== FILTER ===== */
  applyFilter(): void {
    this.filteredData = this.listOfData.filter(item =>
      Object.keys(this.search).every(key =>
        !this.search[key] ||
        String(item[key] ?? '').toLowerCase().includes(this.search[key].toLowerCase())
      )
    );
  }

  // DANH SÁCH DỊCH VỤ CHỈ ĐỊNH
  hisActionBarDichVu = [
    {
      hisTitle: 'Thêm thông tin sinh thiết',
      hisIcon: 'plus',
      hisId: 'add-sinhthiet',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Thêm vào dịch vụ miễn giảm TT',
      hisIcon: 'plus',
      hisId: 'add-dichvu',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Thuốc, vật tư đi kèm',
      hisId: 'medicine',
      hisType: 'primary',
      hisDisabled: false,
      hisChildren: [
        {
          hisTitle: 'Kê thuốc, vật tư đi kèm',
          hisType: 'default',
          hisId: 'medicine1',
          hisDisabled: false,
        },
        {
          hisTitle: 'Danh sách thuốc, vật tư đi kèm',
          hisType: 'default',
          hisId: 'medicine2',
          hisDisabled: false,
        },
      ]
    },
  ];
  
  testOrderData: ServiceDesignation[] = [];
  filteredTestOrderData: ServiceDesignation[] = [];

// ngOnInit(): void {
//   this.testOrderData = this.generateTestOrderData(12);
//   this.filteredTestOrderData = [...this.testOrderData];
// }

generateTestOrderData(count: number): ServiceDesignation[] {
  const names = [
    'Huyết học',
    'Sinh hóa máu',
    'Nước tiểu',
    'CRP',
    'HbA1C',
    'Men gan AST/ALT'
  ];

  return Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    maXetNghiem: `XN${1000 + i}`,
    soPhieu: `BN${2412190000 + i}`,
    tenXetNghiem: names[i % names.length],
    loaiMBP: 'Phiếu VT đi kèm',
    thuocKem: 'Thuốc, VT đi kèm',
    loaiThanhToan: ['tienmat', 'nganhang', 'visa'][i % 3] as any,
    soLuong: Math.floor(Math.random() * 3) + 1,
    trangThai: Math.random() > 0.5 ? 'chuagui' : 'dagui',
    ghiChu: i % 2 === 0
      ? 'Kê thuốc, vật tư đi kèm'
      : 'Danh sách thuốc, vật tư đi kèm'
    }));
  }
  searchTestOrder = {
  maXetNghiem: '',
  soPhieu: '',
  tenXetNghiem: '',
  loaiMBP: '',
  thuocKem: '',
  loaiThanhToan: '',
  soLuong: '',
  trangThai:'',
  ghiChu: ''
};
applyTestOrderFilter(): void {
  this.filteredTestOrderData = this.testOrderData.filter(item =>
    Object.keys(this.searchTestOrder).every(key => {
      const searchValue = this.searchTestOrder[key];
      if (!searchValue) return true;

      return String(item[key] ?? '')
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    })
  );
}



}