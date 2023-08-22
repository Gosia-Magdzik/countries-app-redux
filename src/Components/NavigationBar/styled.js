import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${({theme}) => theme.colors.elements};
  line-height: 70px;
  padding: 0 80px;
  transition: all 0.5s ease-out 0s;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  box-shadow: 19px 5px 20px 5px rgba(66, 68, 90, 1);

  @media (max-width: 730px) {
    flex-direction: column;
    margin: 5px 0;
    height: auto;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.colors.text};
  margin: 0;
  font-size: 4em;
  font-weight: bold;

  @media (max-width: 730px) {
    font-size: 45px;
    text-align: center;
    justify-content: center;
    margin-top: 5px;
  }

  @media (max-width: 490px) {
    font-size: 40px;
    text-align: center;
    justify-content: center;
    margin-top: 5px;
  }
`;


