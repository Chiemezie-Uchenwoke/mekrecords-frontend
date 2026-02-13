// User interface
export interface User {
  _id: string
  fullName: string
  email: string
  role: 'admin' | 'staff'
  isActive: boolean
}

