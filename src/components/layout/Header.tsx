import React from "react";
import styled from "styled-components";
import { CiWarning } from "react-icons/ci";

type Props = {};

const header = (props: Props) => {
  return (
    <ContainerStyles>
      <WarningIconStyles>
        <CiWarning />
      </WarningIconStyles>
      <p>contact</p>
    </ContainerStyles>
  );
};

const ContainerStyles = styled.header`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  box-sizing: border-box;
  background-color: var(--color-pink);
  box-shadow: 0 2px 30px var(--color-white);
  p {
    font-family: GowunDodumRegular;
    font-size: 1.3rem;
    cursor: pointer;
    :hover {
      font-weight: 700;
      color: var(--color-gray);
    }
  }
`;

const WarningIconStyles = styled.div`
  font-size: 2em;
  cursor: pointer;
  color: var(--color-black);
  :hover {
    color: var(--color-gray);
    font-weight: 700;
  }
`;

export default header;
