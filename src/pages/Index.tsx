import React from 'react';
import { Bell, Search, Youtube, Calendar, Trophy, Award, GamepadIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';
import WebcamPanel from '../components/WebcamPanel';
import InstructionPanel from '../components/InstructionPanel';
import Sidebar from '../components/Sidebar';
import ProgressStats from '../components/ProgressStats';

const Index = () => {
  const navigate = useNavigate();

  const upcomingLessons = [
    { title: "Basic Greetings", date: "Tomorrow, 2:00 PM", level: "Beginner" },
    { title: "Numbers 1-10", date: "Wed, 3:30 PM", level: "Beginner" },
    { title: "Common Phrases", date: "Fri, 1:00 PM", level: "Intermediate" }
  ];

  const achievements = [
    { title: "First Sign", description: "Complete your first sign", icon: <Trophy className="h-6 w-6 text-yellow-500" /> },
    { title: "Perfect Score", description: "Get 100% accuracy", icon: <Award className="h-6 w-6 text-blue-500" /> },
    { title: "Weekly Champion", description: "Practice 7 days in a row", icon: <GamepadIcon className="h-6 w-6 text-green-500" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search for signs..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="p-6 space-y-8">
          {/* Welcome Section */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-2xl font-bold text-gray-800">Welcome back, Learner! 👋</h1>
            <p className="text-gray-600">Continue your journey in sign language learning</p>
          </div>

          {/* Progress Stats */}
          <ProgressStats />

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div onClick={() => navigate('/lessons')} className="cursor-pointer">
              <WebcamPanel />
            </div>
            <div onClick={() => navigate('/lessons')} className="cursor-pointer">
              <InstructionPanel />
            </div>
          </div>

          {/* YouTube Tutorials Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Video Tutorials</h2>
              <Youtube className="h-6 w-6 text-red-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((_, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate('/lessons')}
                >
                  <div className="aspect-video bg-gray-200 rounded-md mb-2"></div>
                  <h3 className="font-medium text-gray-800">Basic Sign Language Tutorial {index + 1}</h3>
                  <p className="text-sm text-gray-600">Learn the fundamentals of signing</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Lessons Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Upcoming Lessons</h2>
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-4">
              {upcomingLessons.map((lesson, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => navigate('/lessons')}
                >
                  <div>
                    <h3 className="font-medium text-gray-800">{lesson.title}</h3>
                    <p className="text-sm text-gray-600">{lesson.date}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {lesson.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Achievements</h2>
              <Trophy className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => navigate('/lessons')}
                >
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;