import { styled } from "styled-components";

export const Tile = styled.div`
    width: 500px;
    height: 700px;
    transition: all 0.5s ease-out 0s;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    background-color: ${({ theme }) => theme.colors.elements};
    cursor: pointer;
    border-radius: 20px;
    align-items: center;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 1130px) {
        width: 400px;
    }

    @media (max-width: 998px) {
        width: 600px;
        height: auto;
    }

    @media (max-width: 490px) {
        width: 300px;
        height: auto;
    }
`;

export const Img = styled.img`
    height: 310px;
    width: 100%;
    border-radius: 20px 20px 0 0;

    @media (max-width: 490px) {
        width: 300px;
        height: 210px;
    }
`;

export const CountryData = styled.div`
    background-color: ${({ theme }) => theme.colors.elements};
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.colors.text};
    padding: 20px 0 0px 40px;
    border-radius: 0 0 20px 20px ;
    margin-bottom: 30px;

    @media (max-width: 490px) {
        padding: 15px;
    }
`;

export const Name = styled.h1`
    margin-bottom: 35px;
`;

export const Details = styled.p`
    margin-bottom: 0.5px;
    font-size: 25px;
    word-break: break-all;

    @media (max-width: 490px) {
        margin: 0.5px;
    }
`;