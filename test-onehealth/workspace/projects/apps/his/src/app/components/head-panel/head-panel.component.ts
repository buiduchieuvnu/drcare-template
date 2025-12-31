import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PatientRow } from '../../../models/patient.model';
import { PatientContextService } from '../../../service/patient-context.service';
import { Subscription } from 'rxjs';
import { HisActionBarService } from '@onehealth/ui/his-action-bar';

@Component({
  selector: 'head-panel-component',
  standalone: false,
  templateUrl: './head-panel.component.html',
  styleUrls: ['./head-panel.component.css']
})
export class HeaderPanelComponent implements OnDestroy {
  // Đóng mở thẻ
  isHead = true;
  toggleHead() {
    this.isHead = !this.isHead;
  }

  // ACTION BAR
  actionBarObservable: Subscription;
  hisActionBarTiepNhan = [
    {
      hisTitle: 'Nhập mới(F5)',
      hisId: 'tiepnhan-nhapmoi',
      hisType: 'default',
      hisDisabled: false,
      hisShortcut: 'F5'
    },
    {
      hisTitle: 'Lưu(F4)',
      hisId: 'tiepnhan-luu',
      hisType: 'primary',
      hisDisabled: false,
      hisShortcut: 'F4'
    },
    {
      hisTitle: 'Lịch sử điều trị',
      hisId: 'tiepnhan-lichsu',
      hisType: 'primary',
      hisDisabled: false,
      hisChildren: [
        {
          hisTitle: 'Lịch sử điều trị1',
          hisType: 'default',
          hisId: 'tiepnhan-lichsu1',
          hisDisabled: false,
        },
      ]
    }
  ];
  hisActionBarDanhSach = [
    {
      hisTitle: 'Nhập mới(F5)',
      hisId: 'danhsach-nhapmoi',
      hisType: 'default',
      hisDisabled: false,
      hisShortcut: 'F5'
    },
    {
      hisTitle: 'Dịch vụ CLS(F6)',
      hisId: 'danhsach-cls',
      hisType: 'primary',
      hisDisabled: false,
      hisShortcut: 'F6'
    },
    {
      hisTitle: 'Lịch sử điều trị',
      hisId: 'danhsach-history',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Khác',
      hisId: 'tiepnhan-khac',
      hisType: 'default',
      hisDisabled: false,
      hisChildren: [
        {
          hisTitle: 'Khác1',
          hisType: 'default',
          hisId: 'tiepnhan-lichsu1',
          hisDisabled: false,
        },
      ]
    },
    {
      hisTitle: 'Xóa',
      hisId: 'danhsach-xoa',
      hisType: 'primary',
      hisDanger: true,
      hisDisabled: false
    }
  ];
  hisActionBarLichSu = [
    {
      hisTitle: 'Lưu',
      hisIcon: 'save',
      hisId: 'lichsu-save',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Lịch sử điều trị',
      hisIcon: 'field-time',
      hisId: 'lichsu-history',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Làm mới',
      hisIcon: 'reload',
      hisId: 'lichsu-refresh',
      hisType: 'primary',
      hisDisabled: false
    }
  ];
  hisActionBarChiDinh = [
    {
      hisTitle: 'Thêm thông tin sinh tồn',
      hisIcon: 'plus',
      hisId: 'info-life',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Lịch sử khám',
      hisId: 'history-chidinh',
      hisIcon: 'history',
      hisType: 'primary',
      hisDisabled: false,
      hisChildren: [
        {
          hisTitle: 'Lịch sử chữa bệnh',
          hisType: 'default',
          hisId: 'history-chidinh1',
          hisDisabled: false,
        },
      ]
    },
    {
      hisTitle: 'Dịch vụ CLS',
      hisIcon: 'appstore',
      hisId: 'cls-chidinh',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Đổi CK/PK',
      hisIcon: 'snippets',
      hisId: 'chance-chidinh',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Khác',
      hisIcon: 'menu',
      hisId: 'other-chidinh',
      hisType: 'primary',
      hisDisabled: false,
      hisChildren: [
        {
          hisTitle: 'Khác 1',
          hisType: 'default',
          hisId: 'other-chidinh1',
          hisDisabled: false,
        },
      ]
    },
    {
      hisTitle: 'Xóa',
      hisIcon: 'delete',
      hisId: 'danhsach-xoa',
      hisType: 'primary',
      hisDanger: true,
      hisDisabled: false
    }
  ];
  // QUẢN LÝ NGƯỜI DÙNG
  hisActionBarNguoiDungPhanQuyen = [
    {
      hisTitle: 'Phân quyền control',
      hisId: 'phanquyen-control',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Phân quyền dữ liệu',
      hisId: 'phanquyen-dulieu',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Phân quyền Report',
      hisId: 'phanquyen-report',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Phân quyền Menu',
      hisId: 'phanquyen-menu',
      hisType: 'primary',
      hisDisabled: false
    },
  ];
  hisActionBarNguoiDungChucNang = [
    {
      hisTitle: 'Thêm',
      hisIcon: 'plus',
      hisId: 'chucnang-add',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Sửa',
      hisIcon: 'edit',
      hisId: 'chucnang-update',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Xóa',
      hisIcon: 'delete',
      hisId: 'chucnang-delete',
      hisType: 'primary',
      hisDanger: true,
      hisDisabled: false
    },
    {
      hisTitle: 'Lưu',
      hisIcon: 'save',
      hisId: 'chucnang-save',
      hisType: 'primary',
      hisDisabled: false
    },
    {
      hisTitle: 'Hủy',
      hisIcon: 'close-circle',
      hisId: 'chucnang-cancel',
      hisType: 'primary',
      hisDisabled: false
    },
  ];
  hisActionBarNguoiDungExport = [
    {
      hisTitle: 'Xuất excel',
      hisIcon: 'download',
      hisId: 'export-excel',
      hisType: 'success',
      hisDisabled: false
    },
    {
      hisTitle: 'Lịch sử thay đổi',
      hisIcon: 'history',
      hisId: 'export-history',
      hisType: 'success',
      hisDisabled: false
    },
  ];
  // --------

  isTiepNhan = false;
  isDanhSach = false;
  pageTitle = '';

  isLichSu = false;
  isChiDinh = false;
  patientName = '';
  patientAge: number | null = null;
  patientInfoText = '';

  isNguoiDung=false;

  selectedPatient: PatientRow | null = null;

  constructor(private router: Router,
    private patientCtx: PatientContextService,
    private route: ActivatedRoute,
    private actionBarService: HisActionBarService
  ) {
    this.actionBarObservable = this.actionBarService.currentCommandEvent.subscribe(id => {
      if (!id) return;
      switch (id) {
        case 'danhsach-cls':
          this.handleRequirePatient(() => this.goToService());
          break;
        case 'danhsach-history':
          this.handleRequirePatient(() => this.goToHistory());
          break;
        case 'danhsach-xoa':
          this.handleRequirePatient(() => this.demo2());
          break;
      }
    });
  }

  // Event button của Danh sách bệnh nhân
  private handleRequirePatient(action: () => void) {
    const patient = this.patientCtx.value;
    if (!patient) {
      this.showSelectPatientWarning();
      this.actionBarService.endLoadingToolbar();
      return;
    }
    action();
  }
  private showSelectPatientWarning() {
    alert('Vui lòng chọn một bệnh nhân trước khi thực hiện thao tác.');
  }

  demo2(): void {
    alert('Chào mừng bạn đến với frontend framework OnehealthUI');
  }

  ngOnDestroy(): void {
    if (this.actionBarObservable) {
      this.actionBarObservable.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.resolveHeader();
        this.restorePatientIfNeeded();
      });

    this.patientCtx.stream.subscribe(patient => {
      this.selectedPatient = patient;
      this.updatePatientInfo(patient);
    });
  }

  // Hiển thị thông tin bệnh nhân lên Chỉ định dịch vụ
  private updatePatientInfo(patient: any | null) {
    if (!patient) {
      this.patientInfoText = '';
      return;
    }

    const age = this.calculateAge(patient.birthDate);
    const birth = this.formatDate(patient.birthDate);

    this.patientInfoText =
      `${patient.patientName} – ${birth} – ${age} tuổi`;
  }
  private restorePatientIfNeeded() {
    // Chỉ xử lý ở các trang cần bệnh nhân
    if (!this.isChiDinh && !this.isLichSu) return;

    // Nếu đã có context thì không làm gì
    if (this.patientCtx.value) return;

    let current = this.route;
    while (current.firstChild) {
      current = current.firstChild;
    }

    const id = current.snapshot.params['id'];
    if (!id) return;


    // this.patientService.getById(id).subscribe(p => this.patientCtx.set(p));

    const mockPatient = {
      id: +id,
      patientName: 'Nguyễn Văn A',
      birthDate: '1985-03-12'
    };

    this.patientCtx.set(mockPatient as any);
  }


  formatDate(date: string): string {
    const d = new Date(date);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  }

  calculateAge(birthDate: string): number {
    const dob = new Date(birthDate);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  }

  // Kiểm tra route hiện tại
  private reset() {
    this.isTiepNhan = false;
    this.isDanhSach = false;
    this.isLichSu = false;
    this.isChiDinh = false;
    this.isNguoiDung = false;
  }

  private resolveHeader() {
    this.reset();
    let currentRoute = this.route;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    const path = currentRoute.snapshot.routeConfig?.path ?? '';
    switch (true) {
      case path === 'tiepnhan':
        this.isTiepNhan = true;
        this.pageTitle = 'Tiếp nhận bệnh nhân';
        break;

      case path === 'ds-tiepnhan':
        this.isDanhSach = true;
        this.pageTitle = 'Danh sách tiếp nhận';
        this.patientCtx.clear();
        this.selectedPatient = null;
        break;

      case path === 'lich-su-dieu-tri/:id':
        this.isLichSu = true;
        this.pageTitle = 'Lịch sử điều trị';
        break;

      case path === 'chi-dinh-dich-vu/:id':
        this.isChiDinh = true;
        this.pageTitle = 'Chỉ định dịch vụ';
        break;
      
      case path === 'quan-ly-nguoi-dung':
        this.isNguoiDung = true;
        this.pageTitle = 'Quản lý người dùng';
        break;

      default:
        this.pageTitle = '';
    }
  }

  // Chuyển trang với id
  goToHistory() {
    const p = this.patientCtx.value;
    if (!p) return;
    this.router.navigate(['/lich-su-dieu-tri', p.id]);
  }

  goToService() {
    const p = this.patientCtx.value;
    if (!p) return;
    this.router.navigate(['/chi-dinh-dich-vu', p.id]);
  }


}
