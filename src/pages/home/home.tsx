import React from "react";
import { Main, Video } from "@/pages/home/styles";

export default function Home() {
  return (
    <Main>
      <video
        src="./assets/home.mp4"
        muted={true}
        loop={true}
        autoPlay={true}
        playsInline={true}
        controls={false}
      />
    </Main>
  );
}
