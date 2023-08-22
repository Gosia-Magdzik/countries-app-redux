import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px 10px;
    flex-wrap: wrap;

    @media (max-width: 490px) {
        margin: 50px 0;
    }
`;

export const Button = styled.button`
    padding: 20px;
    margin: 10px;
    background-color: ${({ theme }) => theme.colors.elements};
    color: ${({theme}) => theme.colors.text};
    transition: all 0.5s ease-out 0s;
    font-size: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 7px 0px rgba(66, 68, 90, 1);

    &:hover {
        transform: scale(.9);
    }

    &:active {
        transform: scale(.8);
        filter: brightness(2);
    }

    &.active {
        background-color: #ffea34bd;
        filter: brightness(2);
        transform: scale(1.2);
        font-weight: bold;

    }

    @media (max-width: 490px) {
        padding: 10px;
        margin: 3px;
    }

`;