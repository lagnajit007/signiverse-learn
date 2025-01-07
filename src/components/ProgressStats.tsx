import React, { useEffect, useRef } from 'react';
import { Trophy, Flame, Target, Sparkles, Star, Award } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import gsap from 'gsap';

const ProgressStats = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.stat-card');
    
    gsap.fromTo(cards, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.2,
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <div className="stat-card bg-card-pink p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/90 rounded-xl">
            <Flame className="h-6 w-6 text-accent-pink" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Daily Streak</p>
            <h3 className="text-2xl font-bold text-gray-800">7 Days</h3>
          </div>
        </div>
        <Progress value={70} className="h-2.5 bg-white/50" />
        <p className="text-sm text-gray-600 mt-3 flex items-center gap-2">
          Keep going! <Star className="h-4 w-4 text-yellow-400 animate-pulse" />
        </p>
      </div>

      <div className="stat-card bg-card-purple p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/90 rounded-xl">
            <Trophy className="h-6 w-6 text-accent-purple" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Signs Mastered</p>
            <h3 className="text-2xl font-bold text-gray-800">24</h3>
          </div>
        </div>
        <Progress value={40} className="h-2.5 bg-white/50" />
        <p className="text-sm text-gray-600 mt-3 flex items-center gap-2">
          Level 2 Progress <Award className="h-4 w-4 text-purple-500 animate-pulse" />
        </p>
      </div>

      <div className="stat-card bg-card-mint p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/90 rounded-xl">
            <Target className="h-6 w-6 text-accent-green" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Accuracy</p>
            <h3 className="text-2xl font-bold text-gray-800">85%</h3>
          </div>
        </div>
        <Progress value={85} className="h-2.5 bg-white/50" />
        <p className="text-sm text-gray-600 mt-3 flex items-center gap-2">
          Expert Level! <Sparkles className="h-4 w-4 text-green-500 animate-pulse" />
        </p>
      </div>
    </div>
  );
};

export default ProgressStats;