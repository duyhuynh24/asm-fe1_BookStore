export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  role?: string;
  created_at?: string;
  updated_at?: string;
}
