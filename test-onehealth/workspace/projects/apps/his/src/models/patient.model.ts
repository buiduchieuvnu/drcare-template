export interface PatientRow {
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