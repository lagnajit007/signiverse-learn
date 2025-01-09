import React, { useEffect, useRef, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Paperclip, Mic, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import gsap from 'gsap';
import { GoogleGenerativeAI } from "@google/generative-ai";

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

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const Inbox = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: {
        name: "SigniVerse AI",
        avatar: "/placeholder.svg",
        role: "Assistant"
      },
      content: "Hello! I'm your SigniVerse assistant. How can I help you learn sign language today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const generateResponse = async (userMessage: string) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `You are a helpful sign language learning assistant. The user message is: ${userMessage}. 
                     Provide a concise and helpful response about sign language.`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      return text;
    } catch (error) {
      console.error('Error generating response:', error);
      throw error;
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      sender: {
        name: "You",
        avatar: "/placeholder.svg",
        role: "User"
      },
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await generateResponse(inputMessage);
      
      const newAiMessage: Message = {
        id: messages.length + 2,
        sender: {
          name: "SigniVerse AI",
          avatar: "/placeholder.svg",
          role: "Assistant"
        },
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, newAiMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-chat-background">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold">SigniVerse Assistant</h1>
        </div>
      </div>

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

      <div className="p-4 border-t bg-card">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Paperclip className="w-5 h-5" />
          </Button>
          <Input 
            placeholder="Ask anything about sign language..." 
            className="flex-1 bg-chat-bubble border-0"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <Button variant="ghost" size="icon">
            <Mic className="w-5 h-5" />
          </Button>
          <Button 
            size="icon"
            onClick={handleSendMessage}
            disabled={isLoading || !inputMessage.trim()}
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Inbox;