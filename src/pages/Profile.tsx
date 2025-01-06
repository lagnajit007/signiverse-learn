import React from 'react';
import { Trophy, Flame, Target, Users, Youtube, Calendar, Award, BookOpen } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Sidebar from '../components/Sidebar';

const Profile = () => {
  const achievements = [
    {
      title: "Wildfire",
      description: "Reach a 3 day streak",
      progress: 33,
      icon: <Flame className="h-8 w-8 text-orange-500" />,
      level: 1,
      maxValue: 3
    },
    {
      title: "Sage",
      description: "Earn 100 XP",
      progress: 54,
      icon: <Award className="h-8 w-8 text-green-500" />,
      level: 1,
      maxValue: 100
    },
    {
      title: "Scholar",
      description: "Learn 50 new signs",
      progress: 10,
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      level: 1,
      maxValue: 50
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1">
        {/* Profile Header */}
        <div className="bg-white shadow-sm">
          <div className="relative h-48 bg-gradient-to-r from-primary/20 to-primary/10">
            <div className="absolute -bottom-16 left-6 flex items-end space-x-4">
              <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div className="mb-4 space-y-1">
                <h1 className="text-2xl font-bold text-gray-900">User Name</h1>
                <p className="text-gray-600">Joined March 2024</p>
              </div>
            </div>
          </div>
          <div className="h-16"></div>
        </div>

        <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <Flame className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-500">Day Streak</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-500">Total XP</p>
                    <p className="text-2xl font-bold">54</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-500">Following</p>
                    <p className="text-2xl font-bold">1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-500">Accuracy</p>
                    <p className="text-2xl font-bold">85%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Achievements</CardTitle>
              <button className="text-sm text-primary hover:underline">View All</button>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-xl">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <h3 className="font-medium">{achievement.title}</h3>
                          <p className="text-sm text-gray-500">{achievement.description}</p>
                        </div>
                        <span className="text-xs text-gray-500">
                          Level {achievement.level}
                        </span>
                      </div>
                      <div className="relative">
                        <Progress value={(achievement.progress / achievement.maxValue) * 100} className="h-2" />
                        <span className="absolute right-0 -top-6 text-xs text-gray-500">
                          {achievement.progress}/{achievement.maxValue}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Completed Basic Greetings</p>
                    <p className="text-sm text-gray-500">Earned 10 XP</p>
                  </div>
                  <span className="ml-auto text-sm text-gray-500">2h ago</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Achieved Perfect Score</p>
                    <p className="text-sm text-gray-500">In Numbers 1-10</p>
                  </div>
                  <span className="ml-auto text-sm text-gray-500">1d ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Profile;