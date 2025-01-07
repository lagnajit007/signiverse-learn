import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Inbox from '@/components/Inbox';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const handleViewChange = (view: string) => {
    setCurrentView(view);
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar onViewChange={handleViewChange} />
      <div className="flex-1">
        {currentView === 'dashboard' ? <Dashboard /> : <Inbox />}
      </div>
    </div>
  );
};

export default Index;