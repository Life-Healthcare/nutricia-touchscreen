import React from "react";
import { AppReset } from "@/components/app/app.styles";
import Home from "@/pages/home/home";

export default function App() {
  return (
    <React.Suspense fallback="Loading...">
      <AppReset />
      <Home />
    </React.Suspense>
  );
}
