import React from 'react';
import { ChevronRight, PlayCircle } from 'lucide-react';

const InstructionPanel = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Learn "Hello" in Sign Language</h2>
        <span className="text-sm text-gray-500">Step 1 of 3</span>
      </div>
      
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
              <span className="text-primary font-medium">1</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Hand Position</h3>
              <p className="text-gray-600 text-sm">Raise your right hand to your forehead, palm facing outward</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
              <span className="text-primary font-medium">2</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Movement</h3>
              <p className="text-gray-600 text-sm">Move your hand forward and away from your forehead in a saluting motion</p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mt-8">
          <button className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
            <PlayCircle className="h-5 w-5" />
            Start Practice
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
            Next Sign
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionPanel;