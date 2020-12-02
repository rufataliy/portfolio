import styled from "styled-components";

export const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-bottom: 30px;
  margin: 0 auto;
  overflow: hidden;
  height: 100%;

  & .column-left {
    height: 100%;
    flex-grow: 1.5;
    & .float-box-wrapper {
      height: 100%;
      padding: 20px;
      & > div {
        margin: 0;
        height: 100%;
      }
    }
  }

  & .column-right {
    overflow: auto;
    height: 100%;
    flex-grow: 1;
    & .scrollable-float {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 20px;
      overflow: auto;
      & > div {
        margin: 20px 0;
      }
      & > div:first-child {
        margin-top: 0;
      }
      & > div:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media screen and (max-width: 879px) {
    overflow: auto;
    & .column-left {
      height: auto;
    }
    & .column-right {
      height: auto;
      & .scrollable-float {
        flex-direction: row;
        & > div {
          width: 100%;
          margin: 0 0 20px 0;
          &:first-child {
            margin-right: 20px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 650px) {
    & .column-right .scrollable-float {
      flex-direction: column;
    }
  }
  @media screen and (min-width: 880px) {
    flex-wrap: nowrap;
  }
  @media screen and (min-width: 1200px) {
    width: 80%;
    & .column-left .float-box-wrapper > div {
      width: 100%;
    }
  }
`;
