import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    @media (max-width: 910px) {
        flex-direction: column;
        margin-bottom: 0;
    }
`;

export const Input = styled.input`
    padding: 30px;
    background-color: ${({theme}) => theme.colors.elements};
    border-radius: 20px;
    font-size: 30px;
    border: none;
    width: 700px;
    color: ${({theme}) => theme.colors.text};
    margin: 40px 30px;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);


    @media (max-width: 700px) {
        max-width: 600px;
        margin: 20px;
    }

    &::placeholder {
        color: ${({theme}) => theme.colors.text};
    }
`;

export const Select = styled.select`
    padding: 30px;
    margin: 40px 30px;
    background-color: ${({theme}) => theme.colors.elements};
    border-radius: 20px;
    font-size: 30px;
    border: none;
    width: 400px;
    color: ${({theme}) => theme.colors.text};
    cursor: pointer;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);

    
    @media (max-width: 700px) {
        margin: 20px 0 50px 0;
        font-size: 20px;
        width: 500px;

    }
`;
