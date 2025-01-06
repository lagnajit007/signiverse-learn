import React from 'react';
import { Camera } from 'lucide-react';

interface WebcamViewProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  isWebcamOn: boolean;
}

const WebcamView = ({ videoRef, isWebcamOn }: WebcamViewProps) => {
  return (
    <div className="aspect-video bg-gray-50 rounded-xl flex items-center justify-center relative overflow-hidden border border-gray-100">
      {!isWebcamOn && (
        <div className="flex flex-col items-center gap-3 bg-gray-50 p-8 rounded-lg">
          <div className="p-3 bg-primary/10 rounded-full">
            <Camera className="h-6 w-6 text-primary" />
          </div>
          <p className="text-gray-500 text-sm">Click the camera icon to start practicing</p>
        </div>
      )}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className={`w-full h-full object-cover ${!isWebcamOn ? 'hidden' : ''}`}
      />
    </div>
  );
};

export default WebcamView;