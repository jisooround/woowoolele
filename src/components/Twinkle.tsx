import React from "react";
import styled from "styled-components";

type Props = {};

const Twinkle = (props: Props) => {
  return <TwinkleStyle>{/* <img src="./01.png" alt="" /> */}</TwinkleStyle>;
};

const TwinkleStyle = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  img {
    bottom: 100px;
    left: 200px;
    width: 200px;
    height: auto;
  }
`;
export default Twinkle;
