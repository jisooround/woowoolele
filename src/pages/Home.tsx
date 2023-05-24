import React from "react";
import styled, { keyframes } from "styled-components";

type Props = {};

const Home = (props: Props) => {
  return (
    <ContainerStyles>
      <TitleStyles>WOOWOOLELE</TitleStyles>
      <p>‘우우렐레’는 우쿨렐레 악보를 쉽게 만들어주는 앱입니다.</p>
      <StartButtonStyles>우우렐레 시작하기!</StartButtonStyles>
    </ContainerStyles>
  );
};

const ContainerStyles = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-content: space-between;
  flex-wrap: wrap;
  p {
    width: 100%;
    margin: 20px;
    text-align: center;
    font-size: 1.3rem;
  }
`;

const TitleStyles = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 70px 80px;
  margin: 120px 0 50px 0;
  box-sizing: border-box;
  background-color: var(--color-yellow);
  border: 1px solid var(--color-black);
  font-size: 7rem;
  color: transparent;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: var(--color-black);
`;

const StartButtonStyles = styled.button`
  padding: 15px 30px;
  margin: 100px 0;
  box-sizing: border-box;
  border: 1px solid var(--color-black);
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    transition: 0.2s;
    background-color: var(--color-yellow);
  }
`;

export default Home;
