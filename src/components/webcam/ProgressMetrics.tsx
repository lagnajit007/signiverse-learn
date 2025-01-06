import React from 'react';
import { Trophy } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface ProgressMetricsProps {
  accuracy: number;
}

const ProgressMetrics = ({ accuracy }: ProgressMetricsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-50 p-4 rounded-xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">Accuracy Score</h3>
              <p className="text-xs text-gray-500">Keep practicing!</p>
            </div>
          </div>
          <span className="text-lg font-semibold text-primary">{accuracy}%</span>
        </div>
        <Progress value={accuracy} className="h-2" />
      </div>
      
      <div className="bg-gray-50 p-4 rounded-xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">Daily Goal</h3>
              <p className="text-xs text-gray-500">5/10 signs learned</p>
            </div>
          </div>
        </div>
        <Progress value={50} className="h-2" />
      </div>
    </div>
  );
};

export default ProgressMetrics;