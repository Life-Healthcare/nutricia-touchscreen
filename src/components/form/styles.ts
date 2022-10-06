import styled from "styled-components";

export const FormWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em;
  margin: auto;

  h1 {
    font-size: 3.5em;
    line-height: 1.1;
    color: var(--color-primary);

    span {
      font-weight: bold;
    }
  }

  h2 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 1em;
  }
`;

export const Header = styled.header`
  display: flex;
  gap: 1em;
  align-items: flex-start;
  margin-bottom: 1.5em;
`;

export const Content = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
`;

export const Group = styled.div`
  margin-bottom: 2em;
`;

export const Section = styled.div``;

export const Footer = styled.footer`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: end;
  gap: 2em;

  h3 {
    font-weight: bold;
  }

  ${Group} {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  width: 100%;
  max-width: 800px;
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
  margin-bottom: 1.5em;
`;
