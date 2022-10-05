import React from "react";
import { VideoPlayer } from "@/components/video/styles";

export default function Video() {
  return (
    <VideoPlayer
      src="./assets/home.mp4"
      muted={true}
      loop={true}
      autoPlay={true}
      playsInline={true}
      controls={false}
    />
  );
}
