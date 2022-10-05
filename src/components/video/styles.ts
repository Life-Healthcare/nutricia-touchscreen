import styled from "styled-components";

export const VideoPlayer = styled.video`
  width: auto;
  height: 100vh;

  @media (max-aspect-ratio: 16 / 9) {
    width: 100vw;
    height: auto;
  }
`;
