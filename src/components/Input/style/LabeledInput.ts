import styled from "styled-components/macro";

export const Label = styled.label``;

export const Input = styled.input<{ $width?: string }>`
    margin-left: 10px;
    width: ${(props) => props.$width || "auto"};
`;
