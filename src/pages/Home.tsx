import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();
  return (
    <ContainerStyles>
      <TitleStyles>WOOWOOLELE</TitleStyles>
      <p>‘우우렐레’는 우쿨렐레 악보를 쉽게 만들어주는 앱입니다.</p>
      <StartButtonStyles
        onClick={() => {
          navigate("/sheetmusic");
        }}
      >
        우우렐레 시작하기!
      </StartButtonStyles>
    </ContainerStyles>
  );
};

const ContainerStyles = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  p {
    width: 100%;
    text-align: center;
    font-size: 1.3rem;
  }
`;

const TitleStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 70px 80px;
  margin: 180px 0 50px 0;
  box-sizing: border-box;
  background-color: var(--color-yellow);
  border: 1px solid var(--color-black);
  font-size: 7rem;
  color: transparent;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: var(--color-black);
`;

const StartButtonStyles = styled.button`
  padding: 15px;
  margin: 100px 0;
  box-sizing: border-box;
  border-bottom: 1px solid var(--color-black);
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    color: var(--color-yellow);
    border-bottom: 1px solid var(--color-yellow);
  }
`;

export default Home;
