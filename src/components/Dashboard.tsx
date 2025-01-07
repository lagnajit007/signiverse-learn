import React from 'react';
import ProgressStats from './ProgressStats';
import InstructionPanel from './InstructionPanel';
import WebcamPanel from './WebcamPanel';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProgressStats />
        <InstructionPanel />
        <WebcamPanel />
      </div>
    </div>
  );
};

export default Dashboard;