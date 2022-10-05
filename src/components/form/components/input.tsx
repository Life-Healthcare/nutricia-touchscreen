import React, { useId } from "react";
import {
  CheckBoxGroup,
  ErrorString,
  TextGroup,
  Tick,
} from "@/components/form/components/styles";

type Props = {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type TextProps = Props & {
  value: string;
};

export function Text({ label, value, name, onChange }: TextProps) {
  const id = useId();
  return (
    <TextGroup>
      <label>{label}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
    </TextGroup>
  );
}

type CheckBoxProps = Props & {
  checked: boolean;
  labelSize?: string;
};

export function Checkbox({ label, name, checked, onChange }: CheckBoxProps) {
  const id = useId();

  return (
    <CheckBoxGroup>
      <label htmlFor={id}>
        <Tick>
          <input
            type="checkbox"
            name={name}
            id={id}
            checked={checked}
            onChange={onChange}
          />
          <img src="./assets/images/tick.svg" alt="Tick" />
        </Tick>
        <span>{label}</span>
      </label>
    </CheckBoxGroup>
  );
}

type ErrorProps = {
  children: string;
};
export function Error({ children }: ErrorProps) {
  return <ErrorString>{children}</ErrorString>;
}
