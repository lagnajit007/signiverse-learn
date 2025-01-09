import React, { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import WebcamView from './webcam/WebcamView';
import WebcamControls from './webcam/WebcamControls';
import ProgressMetrics from './webcam/ProgressMetrics';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';

const fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
};

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
        await tf.setBackend('webgl');
        await tf.ready();
        
        console.log('TensorFlow.js backend initialized:', tf.getBackend());
        
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

  const drawHand = (ctx: CanvasRenderingContext2D, landmarks: number[][]) => {
    // Draw palm dots
    landmarks.forEach((point, index) => {
      const x = point[0];
      const y = point[1];

      // Draw larger dots for palm landmarks
      ctx.beginPath();
      ctx.arc(x, y, index === 0 ? 8 : 4, 0, 2 * Math.PI);
      ctx.fillStyle = index === 0 ? '#FF0000' : '#00FF00';
      ctx.fill();
      ctx.stroke();
    });

    // Draw finger lines
    Object.values(fingerJoints).forEach((finger, fingerIndex) => {
      // Different color for each finger
      const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];
      ctx.strokeStyle = colors[fingerIndex];
      ctx.lineWidth = 2;

      // Draw lines connecting each finger joint
      for (let i = 0; i < finger.length - 1; i++) {
        const firstJointIndex = finger[i];
        const secondJointIndex = finger[i + 1];

        ctx.beginPath();
        ctx.moveTo(
          landmarks[firstJointIndex][0],
          landmarks[firstJointIndex][1]
        );
        ctx.lineTo(
          landmarks[secondJointIndex][0],
          landmarks[secondJointIndex][1]
        );
        ctx.stroke();
      }
    });

    // Draw palm base
    ctx.beginPath();
    ctx.moveTo(landmarks[0][0], landmarks[0][1]);
    [5, 9, 13, 17].forEach((point) => {
      ctx.lineTo(landmarks[point][0], landmarks[point][1]);
    });
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.stroke();
  };

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

        // Draw each detected hand
        hands.forEach((hand) => {
          drawHand(ctx, hand.landmarks);
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