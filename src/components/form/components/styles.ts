import styled, { css } from "styled-components";

export const TextGroup = styled.div`
  display: grid;
  max-width: 500px;
  margin-bottom: 1.5em;

  input {
    padding: 1em;
    border: none;
    color: #51338c;
    font-size: 1em;
    outline-color: #51338c;

    &::placeholder {
      color: #51338c;
      font-size: 1em;
    }
  }
`;

export const Tick = styled.div<{ checked: boolean }>`
  height: 2rem;
  width: 2rem;
  position: relative;

  input {
    opacity: 0;
    visibility: hidden;
  }

  img {
    display: ${({ checked }) => (checked ? "block" : "none")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${({ checked }) => {
    if (checked) {
      return css`
        background: #51338c;
      `;
    } else {
      return css`
        background: #ffffff;
      `;
    }
  }}
`;

export const CheckBoxGroup = styled.div<{
  labelSize: "sm" | "lg";
}>`
  margin-bottom: 0.5em;
  max-width: 770px;

  span {
    font-size: 1.3em;
    line-height: 1.2;
  }

  label {
    display: grid;
    grid-template-columns: 2rem 1fr;
    gap: 1em;
    align-items: ${({ labelSize }) =>
      labelSize === "sm" ? "flex-start" : "center"};
    ${({ labelSize }) => {
      if (labelSize === "sm") {
        return css`
          font-size: 0.8em;
        `;
      }
    }}
  }
`;

export const ErrorString = styled.p<{ show: boolean }>`
  color: #d00000;
  font-size: 1.15em;
  font-weight: 500;
  padding-top: 0.4em;

  ${({ show }) => {
    if (show) {
      return css`
        opacity: 1;
        visibility: visible;
      `;
    } else {
      return css`
        opacity: 0;
        visibility: hidden;
      `;
    }
  }}
`;
