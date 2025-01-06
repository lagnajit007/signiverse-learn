import React, { useEffect, useRef, useState } from 'react';
import { Camera, RefreshCw, Video, VideoOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const WebcamPanel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const { toast } = useToast();

  const startWebcam = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user"
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      
      setStream(mediaStream);
      setIsWebcamOn(true);
      
      toast({
        title: "Webcam Started",
        description: "Your webcam has been successfully activated.",
      });
    } catch (error) {
      console.error('Error accessing webcam:', error);
      toast({
        variant: "destructive",
        title: "Webcam Error",
        description: "Unable to access your webcam. Please check permissions.",
      });
    }
  };

  const stopWebcam = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setStream(null);
      setIsWebcamOn(false);
      
      toast({
        title: "Webcam Stopped",
        description: "Your webcam has been turned off.",
      });
    }
  };

  const refreshWebcam = () => {
    stopWebcam();
    setTimeout(startWebcam, 500);
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Practice Area</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={refreshWebcam}
            disabled={!isWebcamOn}
          >
            <RefreshCw className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={isWebcamOn ? stopWebcam : startWebcam}
          >
            {isWebcamOn ? (
              <VideoOff className="h-5 w-5 text-red-500" />
            ) : (
              <Video className="h-5 w-5 text-green-500" />
            )}
          </Button>
        </div>
      </div>

      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
        {!isWebcamOn && (
          <div className="flex flex-col items-center gap-2">
            <Camera className="h-8 w-8 text-gray-400" />
            <p className="text-gray-500">Click the camera icon to start</p>
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

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium text-gray-700">Accuracy Score</h3>
            <span className="text-primary font-semibold">70%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300" 
              style={{ width: '70%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebcamPanel;