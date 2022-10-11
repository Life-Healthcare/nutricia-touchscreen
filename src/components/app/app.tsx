import React from "react";
import { AppReset, FullScreenButton } from "@/components/app/app.styles";
import Home from "@/pages/home/home";

export default function App() {
  return (
    <React.Suspense fallback="Loading...">
      <AppReset />
      <Home />
      <FullScreenButton
      onClick={() => {
        document.querySelector("body").requestFullscreen()
      }}
      >

      </FullScreenButton>
    </React.Suspense>
  );
}
