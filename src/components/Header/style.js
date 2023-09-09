import styled from "styled-components";
const Container = styled.div`
  text-align: center;
  margin: 3rem auto;
  & > header > img {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
    background-color: transparent;
  }
  & > header > h1 {
    font-size: 1.5rem;
  }
`;

export default Container;
