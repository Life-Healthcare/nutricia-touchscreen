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
  placeholder: string;
  error?: string;
  showError: boolean;
};

export function TextInput({
  label,
  value,
  name,
  onChange,
  placeholder,
  showError,
  error,
}: TextProps) {
  const id = useId();
  return (
    <TextGroup>
      <label htmlFor={id}>
        <h2>{label}</h2>
      </label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <Error show={showError}>
        {error ? error : "*This field must be completed"}
      </Error>
    </TextGroup>
  );
}

type CheckBoxProps = Props & {
  checked: boolean;
  labelSize?: "sm" | "lg";
  border?: boolean;
};

export function Checkbox({
  label,
  labelSize = "lg",
  name,
  checked,
  onChange,
  border = false,
}: CheckBoxProps) {
  const id = useId();

  return (
    <CheckBoxGroup labelSize={labelSize}>
      <label htmlFor={id}>
        <Tick checked={checked} border={border}>
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
  show: boolean;
};
export function Error({ children, show }: ErrorProps) {
  return <ErrorString show={show}>{children}</ErrorString>;
}
