import React from "react";
import { Main } from "@/pages/home/styles";
import Video from "@/components/video/video";
import Form from "@/components/form/form";

export default function Home() {
  function handleUserTouch() {
    console.log("touched");
  }
  return (
    <Main>
      <Video onTouch={handleUserTouch} />
      {/*<Form />*/}
    </Main>
  );
}
