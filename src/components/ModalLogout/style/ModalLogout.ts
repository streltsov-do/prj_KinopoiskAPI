import styled from "styled-components";

export const Div = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10;
`;

export const Modal = styled.div`
    padding: 20px;
    background-color: beige;
    border-radius: 20px;
`;

export const Flex = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 10px;
`;
