import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  & .button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    background: linear-gradient(180deg, #1f584b, #17493d);
    color: #c2e9e0;
    font-family: "Roboto Condensed", sans-serif;
    cursor: pointer;
  }
  & .button > :hover {
  }
  & .buttonAlt {
    font-family: "Roboto Condensed", sans-serif;
    border: none;
    background: transparent;
    color: #c2e9e0;
    cursor: pointer;
  }
`;

export default Container;
