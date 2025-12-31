export interface ServiceDesignation {
  id: number;
  maXetNghiem: string;
  soPhieu: string;
  tenXetNghiem: string;
  loaiMBP: string;
  thuocKem: string;
  loaiThanhToan: 'tienmat' | 'nganhang' | 'visa';
  soLuong: number;
  trangThai: 'chuagui' | 'dagui';
  ghiChu: string;
}
