import { Slider } from "@radix-ui/react-slider";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "../ui/button";
import {
  Pause,
  Play,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
} from "lucide-react";

const VideoPlayer = ({ width = "100%", height = "100%", url }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  
  const [isFullScreen, setIsFullScreen] = useState(false);
  

  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  function handleProgress() {}

  

  return (
    <div
      ref={playerContainerRef}
      className={`relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 ease-in-out ${
        isFullScreen ? "w-screen h-screen" : ""
      }`}
      style={{ width, height }}
    >
      <ReactPlayer
        ref={playerRef}
        className="absolute top-0 left-0"
        width="100%"
        height="100%"
        url={url}
        playing={playing}
        volume={volume}
        muted={muted}
        onProgress={handleProgress}
        controls
      />
     
    </div>
  );
};

export default VideoPlayer;
