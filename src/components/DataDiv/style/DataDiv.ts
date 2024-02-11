import styled from "styled-components/macro";

export const Div = styled.div<{
    mini?: boolean;
}>`
    display: grid;
    grid-template-columns: ${(props) => (props.mini ? 80 : 160) + "px"} auto;
`;

export const Title = styled.span<{
    mini?: boolean;
}>`
    color: grey;
    font-size: ${(props) => (props.mini ? "12px" : "16px")};
`;

export const Desc = styled.span<{
    mini?: boolean;
}>`
    color: black;
    font-size: ${(props) => (props.mini ? "12px" : "16px")};
`;
