import React from 'react';
import { Home, Mail, BookOpen, Users, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0">
      <div className="p-6">
        <h2 className="text-xl font-bold text-primary flex items-center gap-2">
          SignLearn
        </h2>
      </div>

      <nav className="px-4">
        <div className="space-y-1">
          <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Overview
          </h3>
          {[
            { icon: Home, label: 'Dashboard', active: true },
            { icon: Mail, label: 'Inbox' },
            { icon: BookOpen, label: 'Lessons' },
            { icon: Users, label: 'Community' },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${
                item.active
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </a>
          ))}
        </div>

        <div className="mt-8 space-y-1">
          <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Settings
          </h3>
          {[
            { icon: Settings, label: 'Settings' },
            { icon: LogOut, label: 'Logout' },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;