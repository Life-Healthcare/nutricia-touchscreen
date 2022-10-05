import React, { useId } from "react";
import { InputGroup } from "@/components/form/components/styles";

type Props = {
  type: string;
  label: string;
  labelSize: string;
};

export default function Input({ type, label, labelSize }: Props) {
  return <InputGroup></InputGroup>;
}
