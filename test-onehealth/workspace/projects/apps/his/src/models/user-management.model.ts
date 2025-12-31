import { UserRole } from "./user-manage-role.model";

export interface UserManagement {
  id: number;
  roles: UserRole[]; 
  userCode: string;
  userName: string;
  userGroup: string;
}