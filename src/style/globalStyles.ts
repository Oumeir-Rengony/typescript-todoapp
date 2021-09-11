import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Titillium Web", sans-serif;
        font-weight: 400;
        background: #f5f5f5;
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyle;
