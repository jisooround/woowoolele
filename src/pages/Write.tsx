import Information from "@/components/Information";
import React, { useState } from "react";
import styled from "styled-components";

type Props = {};

const Write = (props: Props) => {
  const [step, setStep] = useState(1);

  return (
    <ContainerStyle>
      <ProgressBarStyle>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>fin</div>
      </ProgressBarStyle>
      <WriteAreaStyle>
        <Information />
      </WriteAreaStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const ProgressBarStyle = styled.div`
  width: 40%;
  display: flex;
  margin-top: 30px;
  margin-bottom: 40px;
  justify-content: space-between;
  gap: 80px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 10px;
    text-align: center;
    background-color: var(--color-white);
    border: 1px dashed var(--color-black);
    border-radius: 50%;
  }
`;

const WriteAreaStyle = styled.div`
  width: 100%;
  height: 700px;
  border: 1px solid var(--color-black);
  background-color: var(--color-pink);
`;

export default Write;
