import React, { useState } from 'react';
import { Bell, Search, Trophy, Award, Gamepad, Youtube, Calendar, BookOpen, Laptop, Users, PenTool } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Inbox from '../components/Inbox';
import WebcamPanel from '../components/WebcamPanel';
import InstructionPanel from '../components/InstructionPanel';
import ProgressStats from '../components/ProgressStats';

const Index = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const navigate = useNavigate();

  const categories = [
    { icon: <Laptop className="h-5 w-5" />, label: "IT & Software" },
    { icon: <PenTool className="h-5 w-5" />, label: "Media Training" },
    { icon: <Users className="h-5 w-5" />, label: "Business" },
    { icon: <BookOpen className="h-5 w-5" />, label: "Language" },
  ];

  const upcomingLessons = [
    { title: "Basic Greetings", date: "Tomorrow, 2:00 PM", level: "Beginner", students: "9,530" },
    { title: "Numbers 1-10", date: "Wed, 3:30 PM", level: "Beginner", students: "7,845" },
    { title: "Common Phrases", date: "Fri, 1:00 PM", level: "Intermediate", students: "6,120" }
  ];

  const achievements = [
    { title: "First Sign", description: "Complete your first sign", icon: <Trophy className="h-6 w-6 text-yellow-500" /> },
    { title: "Perfect Score", description: "Get 100% accuracy", icon: <Award className="h-6 w-6 text-blue-500" /> },
    { title: "Weekly Champion", description: "Practice 7 days in a row", icon: <Gamepad className="h-6 w-6 text-green-500" /> }
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'inbox':
        return <Inbox />;
      case 'dashboard':
      default:
        return (
          <div className="space-y-8 p-6 bg-background">
            {/* Categories */}
            <div className="flex gap-4 overflow-x-auto pb-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
                  onClick={() => navigate('/lessons')}
                >
                  {category.icon}
                  <span className="whitespace-nowrap text-sm font-medium">{category.label}</span>
                </button>
              ))}
            </div>

            {/* Progress Stats */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
              <ProgressStats />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card-pink p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer" 
                   onClick={() => navigate('/lessons')}>
                <WebcamPanel />
              </div>
              <div className="bg-card-purple p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer"
                   onClick={() => navigate('/lessons')}>
                <InstructionPanel />
              </div>
            </div>

            {/* Popular Lessons */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Popular Lessons</h2>
                <Youtube className="h-6 w-6 text-red-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {upcomingLessons.map((lesson, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-card-mint to-white p-6 rounded-xl hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => navigate('/lessons')}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                        {lesson.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {lesson.level}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{lesson.date}</span>
                      <span>{lesson.students} students</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Your Achievements</h2>
                <Trophy className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gradient-to-br from-card-peach to-white rounded-xl hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => navigate('/lessons')}
                  >
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar onViewChange={setCurrentView} />
      
      <div className="flex-1">
        {currentView !== 'inbox' && (
          <header className="bg-white shadow-sm px-6 py-4 sticky top-0 z-10">
            <div className="flex justify-between items-center">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search for signs..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-lg hover:bg-gray-100">
                  <Bell className="h-5 w-5 text-gray-600" />
                </button>
                <Link to="/profile">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
              </div>
            </div>
          </header>
        )}

        <main>{renderContent()}</main>
      </div>
    </div>
  );
};

export default Index;