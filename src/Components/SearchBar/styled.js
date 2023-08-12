import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 992px) {
        flex-direction: column;
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
    width: 350px;
    color: ${({theme}) => theme.colors.text};
    cursor: pointer;
`;
