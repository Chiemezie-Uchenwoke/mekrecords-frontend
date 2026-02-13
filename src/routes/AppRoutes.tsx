import { Routes, Route } from 'react-router';
import { Login } from '@/pages/auth/Login';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}