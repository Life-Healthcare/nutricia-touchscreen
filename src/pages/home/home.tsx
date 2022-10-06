import React from "react";
import { Main } from "@/pages/home/styles";
import Video from "@/components/video/video";
import Form from "@/components/form/form";

export enum Step {
  video,
  form,
}

export default function Home() {
  const [step, setStep] = React.useState(Step.video);
  function handleUserTouch() {
    setStep(Step.form);
  }
  return (
    <Main>
      {step === Step.video && <Video onTouch={handleUserTouch} />}
      {step === Step.form && <Form onExit={() => setStep(Step.video)} />}
    </Main>
  );
}
