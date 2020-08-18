import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
}
#root{
    height: 100vh;
    width: 100vw;
}
a{
    text-decoration: none;
    color: inherit;
}
`;
