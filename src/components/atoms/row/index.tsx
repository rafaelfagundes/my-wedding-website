import React from "react";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface Props {
  children: any;
}

function Row(props: Props) {
  return <StyledRow>{props.children}</StyledRow>;
}

export default Row;
