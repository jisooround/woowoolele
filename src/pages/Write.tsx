import Information from "@/components/Information";
import Progressbar from "@/components/Progressbar";
import React, { useState } from "react";
import styled from "styled-components";

type Props = {};

const Write = (props: Props) => {
  const [step, setStep] = useState(1);

  return (
    <ContainerStyle>
      <Progressbar />
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

const WriteAreaStyle = styled.div`
  width: 100%;
  height: 700px;
  border: 1px solid var(--color-black);
  display: flex;
  label {
    box-sizing: border-box;
    width: 200px;
  }
  input {
    width: 100%;
    background-color: var(--color-black);
  }
`;

export default Write;
