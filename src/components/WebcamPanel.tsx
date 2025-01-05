import React from 'react';

const WebcamPanel = () => {
  return (
    <div className="h-full w-full bg-secondary p-6 rounded-lg shadow-lg animate-fade-in">
      <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
        <p className="text-gray-500">Webcam feed will appear here</p>
      </div>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Accuracy Score</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-primary h-2.5 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">Current accuracy: 70%</p>
        </div>
      </div>
    </div>
  );
};

export default WebcamPanel;