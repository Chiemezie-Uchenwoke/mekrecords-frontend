import { useAuthStore } from '@/store/authStore';
import { useThemeStore } from '@/store/themeStore';
import { useNavigate } from 'react-router';
import { BsSun, BsMoon } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';

export const Navbar = () => {
  const { user, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  return (
    <header>
        <nav className="bg-white dark:bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    MekRecords
                </h1>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    aria-label="Toggle theme"
                >
                {theme === 'light' ? (
                    <BsMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                    <BsSun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
                </button>

                {/* User Info */}
                <div className="flex items-center gap-2">
                    <div className="text-right">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {user?.fullName}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                            {user?.role}
                        </p>
                    </div>
                </div>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 transition"
                    aria-label="Logout"
                >
                    <FiLogOut className="w-5 h-5" />
                </button>
            </div>
        </nav>
    </header>
  )
};