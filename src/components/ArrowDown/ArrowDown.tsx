import React from "react";
import styled from "styled-components/macro";

import Rectangle from "./Rectangle.svg";

const POS_RIGHT = 10;

const Img = styled.img<{
    right?: number;
    $rotate: boolean;
}>`
    position: absolute;
    top: ${POS_RIGHT}px;
    right: ${(props) =>
        props.right === undefined ? POS_RIGHT : props.right}px;
    border-style: none;
    z-index: 100;
    transform: rotate(${(props) => (props.$rotate ? 180 : 0)}deg);
`;

function ArrowDown(props: { right?: number; $rotate: boolean }) {
    const { $rotate, right } = props;
    return <Img src={Rectangle} $rotate={$rotate} right={right}></Img>;
}

export { ArrowDown };
