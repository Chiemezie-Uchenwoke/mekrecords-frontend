import { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';
import { AppRoutes } from '@/routes/AppRoutes';
import { useAuthStore } from '@/store/authStore';

function App() {
  const theme = useThemeStore((state) => state.theme);
  const fetchCurrentUser = useAuthStore((state) => state.fetchCurrentUser);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme]);

  useEffect(() => {
    fetchCurrentUser()
  }, [fetchCurrentUser]);

  return <AppRoutes />
}

export default App