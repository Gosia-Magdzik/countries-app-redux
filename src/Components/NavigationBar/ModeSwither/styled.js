import styled from "styled-components";
import { ReactComponent as Sun } from "./sun.svg";
import { ReactComponent as Moon } from "./night_sky.svg";


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
    }

    &&:active {
        transform: scale(1.1);
    }

    @media (max-width: 730px) {
        font-size: 2em;
    }

    @media (max-width: 490px) {
        font-size: 15px;
    }
`;

export const StyledSun = styled(Sun)`
    width: 2em;
    height: 2em;
    transition: all 0.3s ease-out 0s;

    &:hover {
        transform: rotate(90deg);
        filter: brightness(1.5);
    }

    &:active {
        transform: rotate(180deg);
    }



    @media (max-width: 730px) {
        width: 2em;
        height: 2em;
    }
`;

export const StyledMoon = styled(Moon)`
    width: 2em;
    height: 2em;
    transition: all 0.3s ease-out 0s;

    @media (max-width: 700px) {
        width: 1em;
        height: 1em;
    }

    &:hover {
        transform: rotate(180deg) scale(0.9);
    }

    &:active {
        transform: rotate(360deg) scale(0.8);
    }
`;


