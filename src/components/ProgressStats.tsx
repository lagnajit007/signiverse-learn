import React from 'react';
import { Trophy, Flame, Target, Sparkles, Star, Award } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ProgressStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <div className="bg-gradient-fun p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg animate-bounce-slight">
            <Flame className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-white/80">Daily Streak</p>
            <h3 className="text-2xl font-bold text-white">7 Days</h3>
          </div>
        </div>
        <Progress value={70} className="h-2.5 bg-white/20" indicatorClassName="bg-white" />
        <p className="text-sm text-white/80 mt-3 flex items-center gap-2">
          Keep going! <Star className="h-4 w-4 text-yellow-300 animate-pulse" />
        </p>
      </div>

      <div className="bg-gradient-cool p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg animate-bounce-slight">
            <Trophy className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-white/80">Signs Mastered</p>
            <h3 className="text-2xl font-bold text-white">24</h3>
          </div>
        </div>
        <Progress value={40} className="h-2.5 bg-white/20" indicatorClassName="bg-white" />
        <p className="text-sm text-white/80 mt-3 flex items-center gap-2">
          Level 2 Progress <Award className="h-4 w-4 text-yellow-300 animate-pulse" />
        </p>
      </div>

      <div className="bg-gradient-fresh p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg animate-bounce-slight">
            <Target className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-white/80">Accuracy</p>
            <h3 className="text-2xl font-bold text-white">85%</h3>
          </div>
        </div>
        <Progress value={85} className="h-2.5 bg-white/20" indicatorClassName="bg-white" />
        <p className="text-sm text-white/80 mt-3 flex items-center gap-2">
          Expert Level! <Sparkles className="h-4 w-4 text-yellow-300 animate-pulse" />
        </p>
      </div>
    </div>
  );
};

export default ProgressStats;