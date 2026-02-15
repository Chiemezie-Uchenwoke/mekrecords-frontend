import { Routes, Route, Navigate } from 'react-router';
import { Login } from '@/pages/auth/Login';
import { Dashboard } from '@/pages/Dashboard';
import { Sales } from '@/pages/Sales';
import { RecordSale } from '@/pages/RecordSale';
import { Batches } from '@/pages/Batches';
import { Reports } from '@/pages/Reports';
import { Users } from '@/pages/Users';
import { ProtectedRoute } from './ProtectedRoute';
import { AdminRoute } from './AdminRoute';

export const AppRoutes = () => {
  return (
    <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/sales/record" element={<RecordSale />} />
          <Route path="/batches" element={<Batches />} />
          <Route path="/reports" element={<Reports />} />
          
          {/* Admin Only Routes */}
          <Route element={<AdminRoute />}>
            <Route path="/users" element={<Users />} />
          </Route>
        </Route>

        {/* Default Routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  )
}