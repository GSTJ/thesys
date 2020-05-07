import styled from "styled-components";
import { Button, Description, Title } from "components/atoms";

export const Box = styled.div`
  max-width: 400px;
  margin: 40px;
  width: 100%;

  border: 1px solid #dddddd;
  background-color: white;
  border-radius: 15px;
  color: black;
  @keyframes bounce {
    20% {
      transform: scaleY(1);
    }
    50% {
      transform: translateY(-50px) scaleY(1.1);
    }
    90% {
      transform: scaleY(0.9);
    }
  }
  @keyframes scale {
    20% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(0.9);
    }
    90% {
      transform: scaleX(1.1);
    }
  }
`;
export const Laywer = styled.img`
  position: relative;
  top: 15px;
  animation: bounce 1s ease-in infinite;
  z-index: 1;
`;
export const Shadow = styled.div`
  position: relative;
  top: -2px;
  width: 100px;
  height: 15px;
  opacity: 0.5;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  animation: scale 1s ease-in infinite;
  margin: auto;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  ${Title.h2} {
    font-size: 30px;
    margin: 0 0 15px 0;
  }
  ${Description} {
    margin-bottom: 25px;
  }
  ${Button} {
    height: 20px;
    font-size: 18px;
    width: 80%;
    margin: 0 0 15px 0;
  }
`;
