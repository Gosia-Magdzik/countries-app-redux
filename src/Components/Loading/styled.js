import styled, { keyframes, css } from "styled-components";

const Animation = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

export const Hourglass = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 auto; 
  width: 200px;
  height: 200px;

  @media (max-width: 490px) {
    width: 100px;
    height: 100px;
    margin: 0 auto; 
  }

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 50px;
    box-sizing: border-box;
    border: 100px solid ${props => (props.darkMode ? 'white' : 'black')};
    border-color: ${props =>
      props.darkMode
        ? 'white transparent white transparent'
        : 'black transparent black transparent'};
    animation: ${Animation} 1.2s infinite;
  
    @media (max-width: 490px) {
      margin: 25px;
      //border: 50px solid ${props => (props.darkMode ? 'white' : 'black')};
    }
  
  }
`;

export const LoaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

