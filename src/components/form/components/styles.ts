import styled from "styled-components";

export const TextGroup = styled.div``;

export const Tick = styled.div`
  background: #51338c;
  height: 2em;
  width: 2em;
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

export const CheckBoxGroup = styled.div`
  margin-bottom: 0.5em;
  span {
    font-size: 1.3em;
  }

  label {
    display: flex;
    gap: 1em;
    align-items: center;
  }
`;

export const ErrorString = styled.p`
  color: #d00000;
  font-size: 1.15em;
  font-family: "Avenir", serif;
  font-weight: 500;
  padding-top: 0.4em;
`;
