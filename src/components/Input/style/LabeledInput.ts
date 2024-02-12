import styled from "styled-components/macro";

export const Flex = styled.div`
    display: flex;
`;

export const Label = styled.label<{ $width?: string }>`
    width: ${(props) => props.$width || "auto"};
`;

export const Input = styled.input<{ $width?: string }>`
    margin-left: 10px;
    width: ${(props) => props.$width || "auto"};
`;
