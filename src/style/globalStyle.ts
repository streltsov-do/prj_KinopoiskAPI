import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body: {

    }

    body *{
        margin: 0;
        box-sizing: border-box;
    }

    .nav__link {
        text-decoration: none;
    }

    .nav__link_active{
        color: green;
    }

    button:hover{
        cursor: pointer;
    }
`;
