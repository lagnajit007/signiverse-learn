import React, { useEffect, useRef, useState } from 'react';
import { Home, BookOpen, Users, Settings, LogOut, LayoutDashboard, MessageSquare, User, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Button } from './ui/button';

interface SidebarProps {
  onViewChange?: (view: string) => void;
}

const Sidebar = ({ onViewChange }: SidebarProps) => {
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div 
        ref={sidebarRef} 
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-white/95 backdrop-blur-sm border-r border-green-100 py-6 shadow-lg transition-all duration-300 z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="px-6 mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
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

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;