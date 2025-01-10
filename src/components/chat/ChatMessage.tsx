import { Message } from "@/types/chat";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
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
  );
};

export default ChatMessage;