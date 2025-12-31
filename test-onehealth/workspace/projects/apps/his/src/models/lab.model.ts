export interface LabRow {
  id: number;

  barcode: string;
  soPhieu: string;
  phieuDieuTri: string;

  bacSiChiDinh: string;
  tgChiDinh: string;

  phongThucHien: string;
  sttThucHien: number;

  phongKham: string;
  phongChuyenKhoa: string;

  tinhTrang: 'kem' | 'binhthuong';
  trangThai: 'chuagui' | 'dagui';

  icon1: 'ok' | 'minus';
}
