import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Brain, Home, Mail, Calendar, Car, User } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Home' },
    { path: '/mail', icon: Mail, label: 'Mail' },
    { path: '/planner', icon: Calendar, label: 'Planner' },
    { path: '/travel', icon: Car, label: 'Travel' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="hidden lg:flex">
        <aside className="fixed top-0 left-0 h-screen w-64 backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border-r border-gray-200/50 dark:border-gray-700/50 p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Nexus AI</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Campus Brain</p>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="ml-64 flex-1 p-6 pb-24">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>

      <div className="lg:hidden">
        <header className="fixed top-0 left-0 right-0 z-10 backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border-b border-gray-200/50 dark:border-gray-700/50 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">Nexus AI</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Your Campus Brain</p>
            </div>
          </div>
        </header>

        <main className="pt-20 pb-24 px-4">
          {children}
        </main>

        <nav className="fixed bottom-0 left-0 right-0 backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-t border-gray-200/50 dark:border-gray-700/50 px-2 py-2 z-10">
          <div className="flex items-center justify-around">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon
                      className={`w-6 h-6 ${isActive ? 'scale-110' : ''}`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span className={`text-xs ${isActive ? 'font-semibold' : 'font-medium'}`}>
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
