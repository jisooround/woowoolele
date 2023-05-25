import React from "react";
import styled from "styled-components";

type Props = {};

const Information = (props: Props) => {
  return (
    <ContainerStyle>
      <TitleStyle>
        <label htmlFor="title">노래 제목</label>
        <input type="text" id="title" />
      </TitleStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div``;

const TitleStyle = styled.div`
  display: flex;
  gap: 10px;
  input {
    width: 100%;
  }
`;

export default Information;
