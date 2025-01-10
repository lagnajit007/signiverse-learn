import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, ThumbsUp, ArrowRight } from 'lucide-react';
import WebcamPanel from '../components/WebcamPanel';
import InstructionPanel from '../components/InstructionPanel';
import Sidebar from '../components/Sidebar';

const Lessons = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Sidebar - Hidden on mobile, shown on larger screens */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Header - Shown only on mobile */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-4">
        <h1 className="text-xl font-semibold text-gray-800">Basic Signs</h1>
        <p className="text-sm text-gray-600">Module 1 - Getting Started</p>
        <Progress value={30} className="mt-2" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 lg:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Header - Hidden on mobile */}
          <div className="hidden lg:block mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Learning "Hello" in Sign Language</h1>
                <p className="text-gray-600 mt-1">Master this essential greeting sign</p>
              </div>
              <Button variant="outline" className="gap-2">
                <Video className="h-4 w-4" />
                Watch Tutorial
              </Button>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Left Column - Lesson Navigation (Scrollable on mobile) */}
            <div className="order-2 lg:order-1 bg-white rounded-lg shadow-md p-4 lg:p-6">
              <ScrollArea className="h-[calc(100vh-280px)] lg:h-[calc(100vh-200px)]">
                <div className="space-y-4">
                  {['Hello', 'Thank You', 'Please', 'Sorry', 'Good Morning', 'Good Night', 'How are you?', 'My name is'].map((lesson, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg transition-colors ${
                        index === 0 ? 'bg-primary text-white' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            index === 0 ? 'bg-white/20' : 'bg-primary/10'
                          }`}>
                            <BookOpen className={`h-4 w-4 ${index === 0 ? 'text-white' : 'text-primary'}`} />
                          </div>
                          <div>
                            <h3 className={`font-medium ${index === 0 ? 'text-white' : 'text-gray-800'}`}>{lesson}</h3>
                            <p className={`text-sm ${index === 0 ? 'text-white/80' : 'text-gray-500'}`}>Basic Sign</p>
                          </div>
                        </div>
                        {index < 3 && (
                          <ThumbsUp className={`h-4 w-4 ${index === 0 ? 'text-white' : 'text-green-500'}`} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Right Column - Practice Area */}
            <div className="order-1 lg:order-2 space-y-4">
              <WebcamPanel />
              <InstructionPanel />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <Button variant="outline" className="w-full sm:w-auto">
              Previous Sign
            </Button>
            <Button className="w-full sm:w-auto ml-4 gap-2">
              Next Sign
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;