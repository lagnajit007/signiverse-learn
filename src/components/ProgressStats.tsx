import React from 'react';
import { Trophy, Flame, Target, Sparkles } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ProgressStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gradient-to-br from-accent-orange/10 to-accent-yellow/10 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-accent-orange/20 rounded-lg animate-bounce-slight">
            <Flame className="h-6 w-6 text-accent-orange" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Daily Streak</p>
            <h3 className="text-2xl font-bold text-accent-orange">7 Days</h3>
          </div>
        </div>
        <Progress value={70} className="h-2 bg-accent-orange/20" indicatorClassName="bg-accent-orange" />
        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
          Keep the streak going! <Sparkles className="h-3 w-3 text-accent-yellow" />
        </p>
      </div>

      <div className="bg-gradient-to-br from-accent-purple/10 to-accent-pink/10 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-accent-purple/20 rounded-lg animate-bounce-slight">
            <Trophy className="h-6 w-6 text-accent-purple" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Signs Learned</p>
            <h3 className="text-2xl font-bold text-accent-purple">24</h3>
          </div>
        </div>
        <Progress value={40} className="h-2 bg-accent-purple/20" indicatorClassName="bg-accent-purple" />
        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
          40% of beginner level complete <Sparkles className="h-3 w-3 text-accent-pink" />
        </p>
      </div>

      <div className="bg-gradient-to-br from-accent-blue/10 to-accent-green/10 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-accent-blue/20 rounded-lg animate-bounce-slight">
            <Target className="h-6 w-6 text-accent-blue" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Accuracy</p>
            <h3 className="text-2xl font-bold text-accent-blue">85%</h3>
          </div>
        </div>
        <Progress value={85} className="h-2 bg-accent-blue/20" indicatorClassName="bg-accent-blue" />
        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
          You're doing great! <Sparkles className="h-3 w-3 text-accent-green" />
        </p>
      </div>
    </div>
  );
};

export default ProgressStats;