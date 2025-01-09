import React, { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import WebcamView from './webcam/WebcamView';
import WebcamControls from './webcam/WebcamControls';
import ProgressMetrics from './webcam/ProgressMetrics';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';

const WebcamPanel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const [accuracy, setAccuracy] = useState(70);
  const [model, setModel] = useState<handpose.HandPose | null>(null);
  const { toast } = useToast();

  // Initialize TensorFlow.js and handpose model
  useEffect(() => {
    const initializeModel = async () => {
      try {
        // First, explicitly set up TensorFlow.js backend
        await tf.setBackend('webgl');
        await tf.ready();
        
        console.log('TensorFlow.js backend initialized:', tf.getBackend());
        
        // Now load the handpose model
        const loadedModel = await handpose.load();
        setModel(loadedModel);
        
        toast({
          title: "Hand Detection Model Loaded",
          description: "Ready to detect hand gestures.",
        });
      } catch (error) {
        console.error('Error initializing TensorFlow.js or loading handpose model:', error);
        toast({
          variant: "destructive",
          title: "Model Loading Error",
          description: "Failed to load hand detection model. Please ensure WebGL is supported in your browser.",
        });
      }
    };
    
    initializeModel();
  }, []);

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

      // Start hand detection loop
      if (model) {
        detectHands();
      }
    } catch (error) {
      console.error('Error accessing webcam:', error);
      toast({
        variant: "destructive",
        title: "Webcam Error",
        description: "Unable to access your webcam. Please check permissions.",
      });
    }
  };

  const detectHands = async () => {
    if (!model || !videoRef.current || !canvasRef.current || !isWebcamOn) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    // Set canvas size to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const detectFrame = async () => {
      if (!isWebcamOn) return;

      try {
        // Detect hands
        const hands = await model.estimateHands(video);

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw hand landmarks
        hands.forEach((hand) => {
          const landmarks = hand.landmarks;

          // Draw dots for each landmark
          landmarks.forEach((point) => {
            ctx.beginPath();
            ctx.arc(point[0], point[1], 5, 0, 2 * Math.PI);
            ctx.fillStyle = '#00FF00';
            ctx.fill();
          });

          // Draw lines connecting landmarks
          ctx.beginPath();
          ctx.moveTo(landmarks[0][0], landmarks[0][1]);
          landmarks.forEach((point) => {
            ctx.lineTo(point[0], point[1]);
          });
          ctx.strokeStyle = '#FF0000';
          ctx.lineWidth = 2;
          ctx.stroke();
        });

        // Continue detection loop
        requestAnimationFrame(detectFrame);
      } catch (error) {
        console.error('Error in hand detection:', error);
      }
    };

    detectFrame();
  };

  const stopWebcam = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setStream(null);
      setIsWebcamOn(false);
      
      // Clear canvas
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
      
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

      <div className="relative">
        <WebcamView 
          videoRef={videoRef}
          isWebcamOn={isWebcamOn}
        />
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{ pointerEvents: 'none' }}
        />
      </div>

      <ProgressMetrics accuracy={accuracy} />
    </div>
  );
};

export default WebcamPanel;
