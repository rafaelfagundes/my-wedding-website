import React from "react";
import styled from "styled-components";

const StyledLittleFlower = styled.div<{ image: string }>`
  width: 32px;
  height: 24px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: -8px;
`;

function LittleFlower() {
  return (
    <StyledLittleFlower image="/images/little-flower.png"></StyledLittleFlower>
  );
}

export default LittleFlower;
