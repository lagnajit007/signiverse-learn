import React from 'react';
import { Trophy, Flame, Target } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ProgressStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Flame className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Daily Streak</p>
            <h3 className="text-2xl font-bold text-gray-900">7 Days</h3>
          </div>
        </div>
        <Progress value={70} className="h-2" />
        <p className="text-xs text-gray-500 mt-2">Keep the streak going!</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Trophy className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Signs Learned</p>
            <h3 className="text-2xl font-bold text-gray-900">24</h3>
          </div>
        </div>
        <Progress value={40} className="h-2" />
        <p className="text-xs text-gray-500 mt-2">40% of beginner level complete</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Accuracy</p>
            <h3 className="text-2xl font-bold text-gray-900">85%</h3>
          </div>
        </div>
        <Progress value={85} className="h-2" />
        <p className="text-xs text-gray-500 mt-2">You're doing great!</p>
      </div>
    </div>
  );
};

export default ProgressStats;