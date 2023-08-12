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

    &:hover {
        transform: scale(.9);
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

    @media (max-width: 1100px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Img = styled.img`
    min-width: 290px;
    max-width: 700px;
    height: auto;
    margin: 0 200px 300px 0;
    aspect-ratio: auto;
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
`;

export const Name = styled.h1`
    font-size: 60px;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 100px;
`;

export const Paragraph = styled.p`
    margin: 5px;
`;