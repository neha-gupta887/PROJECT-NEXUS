import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { User, GraduationCap, Calendar, Mail, Moon, Sun, LogOut } from 'lucide-react';

export default function Profile() {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) return null;

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-3xl p-6 border border-blue-200/50 dark:border-blue-700/50">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your account settings</p>
      </div>

      <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-3xl mb-4">
            {getInitials(user.fullName)}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{user.fullName}</h2>
          <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Full Name</p>
                <p className="font-semibold text-gray-900 dark:text-white">{user.fullName}</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                <p className="font-semibold text-gray-900 dark:text-white">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Branch</p>
                <p className="font-semibold text-gray-900 dark:text-white">{user.branch}</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Year</p>
                <p className="font-semibold text-gray-900 dark:text-white">{user.year} Year</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Settings</h3>

        <div className="space-y-3">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
                {isDark ? (
                  <Moon className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-600" />
                )}
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 dark:text-white">Theme</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {isDark ? 'Dark Mode' : 'Light Mode'}
                </p>
              </div>
            </div>
            <div
              className={`w-14 h-8 rounded-full p-1 transition-all ${
                isDark ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full transition-transform ${
                  isDark ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </div>
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-all border border-red-200 dark:border-red-800"
          >
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
              <LogOut className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-red-700 dark:text-red-400">Logout</p>
              <p className="text-sm text-red-600 dark:text-red-500">Sign out of your account</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
