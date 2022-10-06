import styled from "styled-components";

export const ModalWrapper = styled.main`
  inset: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(000, 000, 000, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;

export const Box = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  max-height: 541px;
  animation: scale 0.5s ease;

  @keyframes scale {
    0% {
      transform: scale(0.7);
    }

    100% {
      transform: scale(1);
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ffffff;
  padding: 5em;

  h1,
  h2 {
    font-size: 3.5em;
    line-height: 1.1;
    color: var(--color-primary);
  }

  h1 {
    font-weight: bold;
  }
`;
