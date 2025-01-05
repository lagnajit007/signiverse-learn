import React from 'react';
import { Camera, RefreshCw } from 'lucide-react';

const WebcamPanel = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Practice Area</h2>
        <button className="text-gray-600 hover:text-primary transition-colors">
          <RefreshCw className="h-5 w-5" />
        </button>
      </div>

      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6 relative">
        <Camera className="h-8 w-8 text-gray-400" />
        <p className="text-gray-500 mt-2">Webcam feed will appear here</p>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium text-gray-700">Accuracy Score</h3>
            <span className="text-primary font-semibold">70%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebcamPanel;