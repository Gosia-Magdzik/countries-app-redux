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
  box-shadow: 0px 10px 11px 0px rgba(66, 68, 90, 1);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.colors.text};
  margin: 0;
  font-size: 4em;
  font-weight: bold;
`;
