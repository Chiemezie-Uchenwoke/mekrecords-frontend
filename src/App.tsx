import { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';
import { AppRoutes } from '@/routes/AppRoutes';

function App() {
  const theme = useThemeStore((state) => state.theme)

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme]);

  return <AppRoutes />
}

export default App