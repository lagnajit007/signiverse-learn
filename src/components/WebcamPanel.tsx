import React, { useEffect, useRef, useState } from 'react';
import { Camera, RefreshCw, Video, VideoOff, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';

const WebcamPanel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const [accuracy, setAccuracy] = useState(70);
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
    <div className="bg-white rounded-xl shadow-sm animate-fade-in p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Practice Area</h2>
          <p className="text-sm text-gray-500 mt-1">Perfect your signing skills</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={refreshWebcam}
            disabled={!isWebcamOn}
            className="hover:bg-primary/10 hover:text-primary"
          >
            <RefreshCw className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={isWebcamOn ? stopWebcam : startWebcam}
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
      </div>

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

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Trophy className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700">Accuracy Score</h3>
                <p className="text-xs text-gray-500">Keep practicing!</p>
              </div>
            </div>
            <span className="text-lg font-semibold text-primary">{accuracy}%</span>
          </div>
          <Progress value={accuracy} className="h-2" />
        </div>
        
        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Trophy className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700">Daily Goal</h3>
                <p className="text-xs text-gray-500">5/10 signs learned</p>
              </div>
            </div>
          </div>
          <Progress value={50} className="h-2" />
        </div>
      </div>
    </div>
  );
};

export default WebcamPanel;