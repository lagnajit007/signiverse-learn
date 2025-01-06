import React from 'react';
import { RefreshCw, Video, VideoOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WebcamControlsProps {
  isWebcamOn: boolean;
  onRefresh: () => void;
  onToggle: () => void;
}

const WebcamControls = ({ isWebcamOn, onRefresh, onToggle }: WebcamControlsProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={onRefresh}
        disabled={!isWebcamOn}
        className="hover:bg-primary/10 hover:text-primary"
      >
        <RefreshCw className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onToggle}
        className={isWebcamOn ? 
          "hover:bg-red-100 hover:text-red-500" : 
          "hover:bg-green-100 hover:text-green-500"
        }
      >
        {isWebcamOn ? (
          <VideoOff className="h-5 w-5 text-red-500" />
        ) : (
          <Video className="h-5 w-5 text-green-500" />
        )}
      </Button>
    </div>
  );
};

export default WebcamControls;