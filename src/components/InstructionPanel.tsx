import React, { useEffect, useRef } from 'react';
import { ChevronRight, PlayCircle, Sparkles, Rainbow, Star } from 'lucide-react';
import gsap from 'gsap';

const InstructionPanel = () => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!panelRef.current) return;

    const steps = panelRef.current.querySelectorAll('.instruction-step');
    
    gsap.fromTo(steps,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <div ref={panelRef} className="bg-gradient-mint p-6 md:p-8 rounded-2xl shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
          Learn "Hello" in Sign Language
          <Rainbow className="h-6 w-6 text-primary animate-bounce-slight" />
        </h2>
        <span className="text-sm bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-medium">
          Step 1 of 3
        </span>
      </div>
      
      <div className="space-y-6">
        <div className="instruction-step bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-green-100 hover:border-green-200 transition-colors">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
              <span className="text-primary font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-lg">
                Hand Position
                <Star className="h-5 w-5 text-yellow-400 animate-pulse" />
              </h3>
              <p className="text-gray-600 text-base">Raise your right hand to your forehead, palm facing outward</p>
            </div>
          </div>
        </div>
        
        <div className="instruction-step bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-green-100 hover:border-green-200 transition-colors">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
              <span className="text-primary font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-lg">
                Movement
                <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
              </h3>
              <p className="text-gray-600 text-base">Move your hand forward and away from your forehead in a saluting motion</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium">
            <PlayCircle className="h-5 w-5" />
            Start Practice
          </button>
          <button className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium">
            Next Sign
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionPanel;