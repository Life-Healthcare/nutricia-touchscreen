import styled, { css } from "styled-components";
import { CheckBoxGroup, ErrorString, TextGroup, Tick } from "./components/styles";

export const FormWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em;
  margin: auto;
  overflow: hidden;

  ${ErrorString} {
    font-size: .8em;
  }

  h1,
  h2,
  p {
    line-height: 1.1;
  }

  h1 {
    font-size: 1.7em;
    color: var(--color-primary);

    span {
      font-weight: bold;
    }
  }

  h2 {
    font-size: 0.8em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  .lazy-load {
    --duration: 1.5s;
    --translate-y: 25%;
    @keyframes lazy-load {
      0% {
        opacity: 0;
        transform: translateY(var(--translate-y));
      }

      100% {
        opacity: 1;
        transform: translateY(0%);
      }
    }

    opacity: 0;
    transform: translateY(var(--translate-y));
    animation: lazy-load var(--duration) ease forwards;
    ${Array.from({ length: 10 }).map((_, i) => {
      return css`
        &-${i} {
          animation-delay: calc((var(--duration) * 0.4) * ${i});
        }
      `;
    })}
  }
`;

export const Header = styled.header`
  display: flex;
  gap: 1em;
  align-items: flex-start;
  margin-bottom: 1.5em;
  margin-top: 2em;
  img {
    width: 7em;
  }
`;

export const Content = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
`;

export const Group = styled.div`
  ${TextGroup} {
    margin-bottom: 0;
    input {
      height: 2.4em;
      width: 60%;
      border-radius: 0.2em;
    }
    input::placeholder {
      color: gray;
    }
  }
  ${CheckBoxGroup} {
    label {
      gap: 0;
      ${Tick} {
        height: 1.4em;
        width: 1.4em;
        margin-left: 0%;
        border-radius: 0.2em;
      }
      span {
        font-size: 0.8em;
        margin-left: 0;
      }
    }
  }
`;

export const Section = styled.div`
`;

export const Footer = styled.footer`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: end;
  gap: 2em;
  font-size: 0.6em;

  h3 {
    font-weight: bold;
  }

  ${Group} {
    margin-bottom: 0;
  }

  p {
    max-width: 820px;
  }

  & > div:last-child {
    margin-left: 1em;
  }
`;

export const Bold = styled.p`
  font-weight: bold;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  height: 1.5em;
  padding: 1.5em;
  color: #ffffff;
  background-color: #51338c;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1.5em;
`;

export const Exit = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  color: #51338c;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1em;
  font-size: .8em;
`;
