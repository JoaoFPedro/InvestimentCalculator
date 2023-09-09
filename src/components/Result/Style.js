import styled from "styled-components";

const Container = styled.div`
  .result {
    max-width: 50rem;
    margin: 2rem auto;
    padding: 1rem;
    table-layout: fixed;
    border-spacing: 1rem;
    text-align: right;
  }
  .result thead {
    font-size: 0.9rem;
    color: #83e6c0;
  }
  .result tbody {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 0.9rem;
    color: #c2e9e0;
  }
`;

export default Container;
