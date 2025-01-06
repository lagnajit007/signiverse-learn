import React from 'react';
import { ChevronRight, PlayCircle, Sparkles, Rainbow } from 'lucide-react';

const InstructionPanel = () => {
  return (
    <div className="bg-gradient-playful p-6 rounded-lg shadow-sm animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          Learn "Hello" in Sign Language
          <Rainbow className="h-5 w-5 text-accent-purple animate-bounce-slight" />
        </h2>
        <span className="text-sm bg-white/50 px-3 py-1 rounded-full text-gray-700">Step 1 of 3</span>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-accent-purple/20 hover:border-accent-purple/40 transition-colors">
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 bg-accent-purple/20 rounded-full flex items-center justify-center mt-1">
              <span className="text-accent-purple font-medium">1</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1 flex items-center gap-2">
                Hand Position
                <Sparkles className="h-4 w-4 text-accent-yellow" />
              </h3>
              <p className="text-gray-600 text-sm">Raise your right hand to your forehead, palm facing outward</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-accent-blue/20 hover:border-accent-blue/40 transition-colors">
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 bg-accent-blue/20 rounded-full flex items-center justify-center mt-1">
              <span className="text-accent-blue font-medium">2</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1 flex items-center gap-2">
                Movement
                <Sparkles className="h-4 w-4 text-accent-pink" />
              </h3>
              <p className="text-gray-600 text-sm">Move your hand forward and away from your forehead in a saluting motion</p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mt-8">
          <button className="flex items-center gap-2 bg-accent-purple text-white px-6 py-2 rounded-lg hover:bg-accent-purple/90 transition-colors">
            <PlayCircle className="h-5 w-5" />
            Start Practice
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-accent-purple transition-colors">
            Next Sign
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionPanel;