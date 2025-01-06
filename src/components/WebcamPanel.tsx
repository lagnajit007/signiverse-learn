import React, { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import WebcamView from './webcam/WebcamView';
import WebcamControls from './webcam/WebcamControls';
import ProgressMetrics from './webcam/ProgressMetrics';

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

  const toggleWebcam = () => {
    if (isWebcamOn) {
      stopWebcam();
    } else {
      startWebcam();
    }
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
        <WebcamControls 
          isWebcamOn={isWebcamOn}
          onRefresh={refreshWebcam}
          onToggle={toggleWebcam}
        />
      </div>

      <WebcamView 
        videoRef={videoRef}
        isWebcamOn={isWebcamOn}
      />

      <ProgressMetrics accuracy={accuracy} />
    </div>
  );
};

export default WebcamPanel;