import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import WebcamPanel from '../components/WebcamPanel';
import InstructionPanel from '../components/InstructionPanel';
import Sidebar from '../components/Sidebar';
import ProgressStats from '../components/ProgressStats';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search for signs..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Welcome back, Learner! 👋</h1>
            <p className="text-gray-600">Continue your journey in sign language learning</p>
          </div>

          {/* Progress Stats */}
          <ProgressStats />

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <WebcamPanel />
            <InstructionPanel />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;