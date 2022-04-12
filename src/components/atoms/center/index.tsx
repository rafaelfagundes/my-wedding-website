import React from "react";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

type Props = {
  children: any;
};

function Center(props: Props) {
  return <StyledRow>{props.children}</StyledRow>;
}

export default Center;
