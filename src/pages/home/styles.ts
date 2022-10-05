import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  width: 100vw;
`;

export const Video = styled.video`
  width: auto;
  height: 100vh;

  @media (max-aspect-ratio: 16 / 9) {
    width: 100vw;
    height: auto;
  }
`;
