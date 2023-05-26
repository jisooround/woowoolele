import React from "react";
import styled from "styled-components";

type Props = {};

const Progressbar = (props: Props) => {
  return (
    <>
      <ProgressBarStyle>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>fin</div>
      </ProgressBarStyle>
    </>
  );
};

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

export default Progressbar;
