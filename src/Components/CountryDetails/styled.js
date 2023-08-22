import styled from "styled-components";
import { Link as StyledLink } from "react-router-dom";


export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.elements};
    color: ${({theme}) => theme.colors.text};
    padding: 20px 70px;
    transition: all 0.5s ease-out 0s;
    font-size: 20px;
    border-radius: 10px;
    border: none;
    display: flex;
    align-items: center;
    margin-top: 100px;
    box-shadow: 8px 8px 14px 0px rgba(66, 68, 90, 1);

    &:hover {
        transform: scale(.9);
    }

    @media (max-width: 490px) {
        margin-top: 20px;
        font-size: 10px;
    }
`;

export const ButtonLink = styled(StyledLink)`
    font-size: 30px;
    color: ${({theme}) => theme.colors.text};
    cursor: pointer;
    text-decoration: none;
`;

export const Wrapper = styled.div`
    margin-top: 100px;
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 200px;

    @media (max-width: 1100px) {
        flex-wrap: wrap;
        gap: 20px;
        align-items: center;
    }

    @media (max-width: 490px) {
        width: 200px;
        height: auto;
        align-items: center;

    }
`;

export const Img = styled.img`
    max-width: 1000px;
    height: auto;
    aspect-ratio: auto;
    border-radius: 15px;
    align-self: center;

    @media (max-width: 1100px) {
        margin: 0 0px 0px 0;
        width: 400px;
        padding: 5px;
    }

    @media (max-width: 490px) {
        width: 350px;
        height: auto;
    }
`;

export const Data = styled.div`
    color: ${({theme}) => theme.colors.text};
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`;

export const Details = styled.div`
    color: ${({theme}) => theme.colors.text};
    display: flex;
    flex-direction: row;
    font-size: 25px;

    @media (max-width: 1100px) {
    flex-direction: column;
  }

  @media (max-width: 490px) {
    font-size: 25px;
    flex-direction: column;

  }
`;

export const Name = styled.h1`
    font-size: 60px;

    @media (max-width: 490px) {
    font-size: 45px;
    margin-bottom: 15px;
  }
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 100px;
`;

export const Paragraph = styled.p`
    margin: 5px;
`;

export const BordersContainer = styled.label`
    font-size: 35px;
    margin-top: 80px;

    @media (max-width: 490px) {
    font-size: 20px;
    margin-top: 5px;
  }
`;

export const BorderLink = styled(StyledLink)`
    background-color: ${({ theme }) => theme.colors.elements};
    font-size: 25px;
    cursor: pointer;
    padding: 10px;
    text-decoration: none;
    border-radius: 5px;
    margin: 10px;
    color: ${({theme}) => theme.colors.text};
    transition: all 0.5s ease-out 0s;

    &&:hover {
        transform: scale(0.9);
        filter: brightness(1.5);
    }

    &&:active {
        transform: scale(1.1);
        filter: brightness(2);
    }

    @media (max-width: 490px) {
    font-size: 20px;
  }
`;