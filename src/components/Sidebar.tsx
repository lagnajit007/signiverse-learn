import React from 'react';
import { Home, BookOpen, Users, Settings, LogOut, LayoutDashboard, MessageSquare, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-white h-screen sticky top-0 border-r border-gray-100 py-6">
      <div className="px-6 mb-8">
        <h2 className="text-xl font-bold text-primary flex items-center gap-2">
          SigniVerse
        </h2>
      </div>

      <div className="px-4 space-y-6">
        <div>
          <h3 className="px-4 text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
            Overview
          </h3>
          <nav className="space-y-1">
            {[
              { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
              { icon: MessageSquare, label: 'Inbox', path: '/inbox' },
              { icon: BookOpen, label: 'Lessons', path: '/lessons' },
              { icon: Users, label: 'Community', path: '/community' },
              { icon: User, label: 'Profile', path: '/profile' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="flex items-center w-full px-4 py-2.5 text-sm rounded-lg transition-colors hover:bg-primary/10 hover:text-primary group"
              >
                <item.icon className="h-5 w-5 mr-3 group-hover:text-primary" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <h3 className="px-4 text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
            Settings
          </h3>
          <nav className="space-y-1">
            {[
              { icon: Settings, label: 'Settings', path: '/settings' },
              { icon: LogOut, label: 'Logout', path: '/logout' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="flex items-center w-full px-4 py-2.5 text-sm rounded-lg transition-colors hover:bg-primary/10 hover:text-primary group"
              >
                <item.icon className="h-5 w-5 mr-3 group-hover:text-primary" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;