import React, { useEffect, useRef } from 'react';
import ProgressStats from './ProgressStats';
import InstructionPanel from './InstructionPanel';
import WebcamPanel from './WebcamPanel';
import gsap from 'gsap';

const Dashboard = () => {
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dashboardRef.current) return;

    const panels = dashboardRef.current.querySelectorAll('.dashboard-panel');
    
    gsap.fromTo(panels, 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <div 
      ref={dashboardRef}
      className="p-8 space-y-8 bg-gradient-to-br from-card via-card-muted to-card-accent min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
          Welcome Back to SigniVerse
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="dashboard-panel bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
            <ProgressStats />
          </div>
          
          <div className="dashboard-panel bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
            <InstructionPanel />
          </div>
          
          <div className="dashboard-panel bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
            <WebcamPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;