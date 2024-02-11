import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    position: relative;
    z-index: 2;
`;
export const DivArrow = styled.div`
    display: flex;
    position: relative;
`;

const WIDTH = 140;
const HEIGHT = 25;

export const DivDrop = styled.div<{
    items: number;
}>`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: ${WIDTH}px;
    overflow-y: hidden;
    height: ${(prop) => prop.items * HEIGHT}px;
    background-color: #ffffff;
    z-index: 20;
`;

export const DivDropItem = styled.div<{
    index: number;
}>`
    display: flex;
    position: absolute;
    width: ${WIDTH}px;
    overflow-y: hidden;
    top: ${(prop) => prop.index * HEIGHT}px;
    height: ${HEIGHT}px;
`;

export const Btn = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    left: 97px;
    top: 564px;
    background: #ffffff;
    border: 1px solid #c7c7c7;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    opacity: 100%;
    &:hover {
        background: #dfffff;
    }
`;
