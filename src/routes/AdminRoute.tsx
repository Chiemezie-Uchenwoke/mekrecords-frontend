import { Navigate, Outlet } from 'react-router';
import { useAuthStore } from '@/store/authStore';

export const AdminRoute = () => {
  const user = useAuthStore((state) => state.user);
  
  if (user?.role !== 'admin') {
    return <Navigate to="/dashboard" replace />
  }
  
  return <Outlet />
};