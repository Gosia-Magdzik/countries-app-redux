import styled from "styled-components";
import { ReactComponent as Sun } from "./sun.svg"

export const Button = styled.button`
    color: ${({ theme }) => theme.colors.text};
    border: none;
    background-color: rgba(0, 0, 0, 0);
    font-size: 30px;
    display: flex;
    align-items: center;
    transition: all 0.5s ease-out 0s;
    cursor: pointer;
    gap: 10px;
    font-weight: 600;
    white-space: nowrap;


    &&:hover {
        transform: scale(0.9);
        filter: brightness(1.5);
        color: #E5C74B;
    }
`;

export const StyledSun = styled.Sun`
    width: 2em;
    height: 2em;
`;