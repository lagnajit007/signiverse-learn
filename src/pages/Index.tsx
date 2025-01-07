import React from 'react';
import Sidebar from '@/components/Sidebar';
import Inbox from '@/components/Inbox';

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1">
        <Inbox />
      </div>
    </div>
  );
};

export default Index;