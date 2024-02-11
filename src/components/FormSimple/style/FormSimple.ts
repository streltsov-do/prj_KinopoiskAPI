import styled from "styled-components/macro";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: max-content;
    padding: 10px;
    border-style: solid;
    border-radius: 5px;
    border-width: 1px;
    box-shadow: 4px 3px 5px lightskyblue;
`;

export const Span = styled.h3`
    text-align: center;
`;

export const ErrorDesc = styled.span`
    color: red;
`;

export const Flex = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
`;
