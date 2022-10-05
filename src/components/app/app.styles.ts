import { createGlobalStyle } from "styled-components";
import { fluidRange } from "polished";
import vars from "@/components/app/vars";

export const AppReset = createGlobalStyle`
  @font-face {
    font-family: "Bariol";
    src: url("./assets/fonts/Bariol_Bold.otf") format("otf");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Bariol";
    src: url("./assets/fonts/Bariol_Light.otf") format("otf");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Bariol";
    src: url("./assets/fonts/Bariol_Regular.otf") format("otf");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  
  :root {
    --root-scale: 3;
    --root-size: calc(var(--root-scale) * 1vh);
    --root-min: 16px;
    --root-max: 20px;
    --color-primary: #51338C,

  }

  @media (orientation: portrait) {
    --root-size: calc(var(--root-scale) * 1vw);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
  }

  html,
  body,
  #root,
  main {
    width: 100%;
    height: 100%;
  }

  html {
    ${fluidRange(
      {
        prop: "font-size",
        fromSize: `${vars.rootSize * 0.8}px`,
        toSize: `${vars.rootSize}px`,
      },
      `${vars.responsiveMin}px`,
      `${vars.responsiveMax}px`
    )};
    font-size: clamp(var(--root-min), var(--root-size), var(--root-max));
    font-family: "Bariol", sans-serif;
    font-weight: normal;
    line-height: 1em;
    text-rendering: geometricPrecision;
    background-color: #51338C;
    color: #51338C;
  }

  main {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
`;
