import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Paperclip, Mic, Loader2 } from "lucide-react";

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  handleSendMessage: () => void;
  isLoading: boolean;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const ChatInput = ({ 
  inputMessage, 
  setInputMessage, 
  handleSendMessage, 
  isLoading,
  handleKeyPress 
}: ChatInputProps) => {
  return (
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
  );
};

export default ChatInput;