import React from 'react';
import { ChevronRight, PlayCircle, Sparkles, Rainbow, Star } from 'lucide-react';

const InstructionPanel = () => {
  return (
    <div className="bg-gradient-playful p-6 md:p-8 rounded-xl shadow-lg animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
          Learn "Hello" in Sign Language
          <Rainbow className="h-6 w-6 text-white animate-bounce-slight" />
        </h2>
        <span className="text-sm bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium">
          Step 1 of 3
        </span>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30 hover:border-white/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-white/30 rounded-full flex items-center justify-center mt-1">
              <span className="text-white font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2 text-lg">
                Hand Position
                <Star className="h-5 w-5 text-yellow-300 animate-pulse" />
              </h3>
              <p className="text-white/80 text-base">Raise your right hand to your forehead, palm facing outward</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30 hover:border-white/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-white/30 rounded-full flex items-center justify-center mt-1">
              <span className="text-white font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2 text-lg">
                Movement
                <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" />
              </h3>
              <p className="text-white/80 text-base">Move your hand forward and away from your forehead in a saluting motion</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 font-medium">
            <PlayCircle className="h-5 w-5" />
            Start Practice
          </button>
          <button className="flex items-center justify-center gap-2 text-white hover:text-white/80 transition-colors font-medium">
            Next Sign
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionPanel;