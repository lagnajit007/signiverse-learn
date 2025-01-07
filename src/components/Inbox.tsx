import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Paperclip, Mic } from "lucide-react";
import gsap from 'gsap';

interface Message {
  id: number;
  sender: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  timestamp: string;
  isOwn?: boolean;
}

const messages: Message[] = [
  {
    id: 1,
    sender: {
      name: "Michael B.",
      avatar: "/placeholder.svg",
      role: "Project Manager"
    },
    content: "Hello! How's the progress on the new feature?",
    timestamp: "12:25"
  },
  {
    id: 2,
    sender: {
      name: "You",
      avatar: "/placeholder.svg",
      role: "Developer"
    },
    content: "Hi! I've completed the initial implementation. Would you like to review it?",
    timestamp: "12:28",
    isOwn: true
  },
  {
    id: 3,
    sender: {
      name: "Michael B.",
      avatar: "/placeholder.svg",
      role: "Project Manager"
    },
    content: "That would be great! Can you share the documentation as well?",
    timestamp: "12:30"
  }
];

const Inbox = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { 
          opacity: 0, 
          y: 20 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-chat-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold">Inbox</h1>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div ref={containerRef} className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex ${message.isOwn ? 'flex-row-reverse' : 'flex-row'} items-start gap-3 max-w-[80%]`}>
                <Avatar className="w-8 h-8">
                  <AvatarImage src={message.sender.avatar} />
                  <AvatarFallback>{message.sender.name[0]}</AvatarFallback>
                </Avatar>
                <div className={`flex flex-col ${message.isOwn ? 'items-end' : 'items-start'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">{message.sender.name}</span>
                    <span className="text-xs text-chat-time">{message.timestamp}</span>
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    message.isOwn 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-chat-bubble text-foreground rounded-tl-none'
                  }`}>
                    {message.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t bg-card">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Paperclip className="w-5 h-5" />
          </Button>
          <Input 
            placeholder="Write a message..." 
            className="flex-1 bg-chat-bubble border-0"
          />
          <Button variant="ghost" size="icon">
            <Mic className="w-5 h-5" />
          </Button>
          <Button size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Inbox;