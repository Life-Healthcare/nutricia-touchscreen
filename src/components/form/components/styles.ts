import styled, { css } from "styled-components";

export const TextGroup = styled.div`
  display: grid;
  max-width: 500px;

  input {
    padding: 1em;
    border: none;
    color: #51338c;

    &::placeholder {
      color: #51338c;
    }
  }
`;

export const Tick = styled.div`
  background: #51338c;
  height: 2rem;
  width: 2rem;
  position: relative;

  input {
    opacity: 0;
    visibility: hidden;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const CheckBoxGroup = styled.div<{ labelSize: "sm" | "lg" }>`
  margin-bottom: 0.5em;
  span {
    font-size: 1.3em;
  }

  label {
    display: grid;
    grid-template-columns: 2em 1fr;
    gap: 1em;
    align-items: ${({ labelSize }) =>
      labelSize === "sm" ? "flex-start" : "center"} ;
    ${({ labelSize }) => {
      if (labelSize === "sm") {
        return css`
          font-size: 0.8em;
        `;
      }
    }}
`;

export const ErrorString = styled.p`
  color: #d00000;
  font-size: 1.15em;
  font-family: "Avenir", serif;
  font-weight: 500;
  padding-top: 0.4em;
`;
