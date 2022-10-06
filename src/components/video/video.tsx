import React from "react";
import { VideoPlayer } from "@/components/video/styles";

type Props = {
  onTouch: () => void;
};

export default function Video({ onTouch }: Props) {
  return (
    <VideoPlayer
      src="./assets/videos/home.mp4"
      muted={true}
      loop={true}
      autoPlay={true}
      playsInline={true}
      controls={false}
      onMouseDown={onTouch}
    />
  );
}
