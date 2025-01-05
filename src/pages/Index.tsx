import React from 'react';
import WebcamPanel from '../components/WebcamPanel';
import InstructionPanel from '../components/InstructionPanel';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary">SignLearn</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-primary transition-colors">
                Profile
              </button>
              <button className="text-gray-600 hover:text-primary transition-colors">
                Progress
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[calc(100vh-8rem)]">
          <WebcamPanel />
          <InstructionPanel />
        </div>
      </main>
    </div>
  );
};

export default Index;