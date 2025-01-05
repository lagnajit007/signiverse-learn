import React from 'react';

const InstructionPanel = () => {
  return (
    <div className="h-full w-full bg-white p-6 rounded-lg shadow-lg animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Learn "Hello" in Sign Language</h2>
        <p className="text-gray-600">Follow these steps to sign "Hello":</p>
      </div>
      
      <div className="space-y-6">
        <div className="bg-secondary p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Step 1: Hand Position</h3>
          <p className="text-gray-600">Raise your right hand to your forehead, palm facing outward</p>
        </div>
        
        <div className="bg-secondary p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Step 2: Movement</h3>
          <p className="text-gray-600">Move your hand forward and away from your forehead in a saluting motion</p>
        </div>
        
        <div className="mt-8">
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
            Next Sign
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionPanel;