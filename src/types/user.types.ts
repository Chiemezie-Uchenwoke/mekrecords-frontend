// User interface
export interface User {
  _id: string;
  fullName: string;
  email: string;
  role: 'admin' | 'staff';
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  success: boolean
  message: string
  user: User
}