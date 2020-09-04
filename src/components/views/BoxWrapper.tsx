import styled from "styled-components";

export const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-bottom: 30px;
  margin: 0 auto;
  overflow: auto;
  height: 100%;
  & > * {
    max-width: 100%;
  }
  @media screen and (min-width: 300px) {
    width: 100%;
  }
  @media screen and (min-width: 1500px) {
    width: 70%;
  }
`;
