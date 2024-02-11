import styled from "styled-components/macro";

export const Div = styled.div`
    padding: 0 20px;
    display: flex;
    height: 50px;
    /* gap:20px; */
    justify-content: space-between;
    align-items: center;
    background-color: lightgray;
`;

export const Title = styled.div`
    /* min-width: 165px; */
    white-space: nowrap;
    font-weight: bold;
    text-align: center;
    margin-right: 20px;
`;

export const Nav = styled.ul`
    display: flex;
    gap: 30px;
    list-style: none;
    padding: 0;
    align-items: center;
`;

export const Li = styled.li`
    white-space: nowrap;
`;
