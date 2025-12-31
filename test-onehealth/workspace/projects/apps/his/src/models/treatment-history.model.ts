export interface TreatmentHistoryRow {
  id: number;
  status: 'pending' | 'done';
  signed: boolean;
  barcode: string;
  receiptNo: string;
  treatmentNo: string;
  department: string;
  room: string;
  executedAt: string; 
}
