import React, { useEffect, useRef } from 'react';
import { Home, BookOpen, Users, Settings, LogOut, LayoutDashboard, MessageSquare, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

interface SidebarProps {
  onViewChange?: (view: string) => void;
}

const Sidebar = ({ onViewChange }: SidebarProps) => {
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sidebarRef.current) return;

    const menuItems = sidebarRef.current.querySelectorAll('.menu-item');
    
    gsap.fromTo(menuItems,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      }
    );
  }, []);

  const handleItemClick = (path: string, view?: string) => {
    if (view && onViewChange) {
      onViewChange(view);
    } else {
      navigate(path);
    }
  };

  return (
    <div ref={sidebarRef} className="w-64 bg-white/95 backdrop-blur-sm h-screen sticky top-0 border-r border-green-100 py-6 shadow-lg transition-all duration-300 lg:translate-x-0 -translate-x-full">
      <div className="px-6 mb-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent flex items-center gap-2">
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
              { icon: LayoutDashboard, label: 'Dashboard', path: '/', view: 'dashboard' },
              { icon: MessageSquare, label: 'Inbox', path: '/', view: 'inbox' },
              { icon: BookOpen, label: 'Lessons', path: '/lessons' },
              { icon: Users, label: 'Community', path: '/community' },
              { icon: User, label: 'Profile', path: '/profile' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleItemClick(item.path, item.view)}
                className="menu-item flex items-center w-full px-4 py-3 text-sm rounded-xl transition-all duration-300 hover:bg-gradient-mint hover:text-primary group"
              >
                <item.icon className="h-5 w-5 mr-3 transition-colors duration-300 group-hover:text-primary" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-4 border-t border-green-100">
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
                onClick={() => handleItemClick(item.path)}
                className="menu-item flex items-center w-full px-4 py-3 text-sm rounded-xl transition-all duration-300 hover:bg-gradient-mint hover:text-primary group"
              >
                <item.icon className="h-5 w-5 mr-3 transition-colors duration-300 group-hover:text-primary" />
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