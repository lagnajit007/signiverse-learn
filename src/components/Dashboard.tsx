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
      className="min-h-screen bg-gradient-to-br from-card via-card-muted to-card-accent"
    >
      <div className="container mx-auto px-4 py-6 lg:py-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
          Welcome Back to SigniVerse
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div className="dashboard-panel h-full">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 md:p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300 h-full">
              <ProgressStats />
            </div>
          </div>
          
          <div className="dashboard-panel h-full">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 md:p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300 h-full">
              <InstructionPanel />
            </div>
          </div>
          
          <div className="dashboard-panel h-full md:col-span-2 xl:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 md:p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300 h-full">
              <WebcamPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;