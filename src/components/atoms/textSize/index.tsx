import React from "react";
import styled from "styled-components";

const StyledText = styled.span<{ size: number }>`
  max-width: ${(props) => props.size}px;
  padding: 0 40px;
`;

type Props = {
  size?: number;
  children: JSX.Element | string;
};

function TextSize(props: Props) {
  return <StyledText size={props.size || 600}>{props.children}</StyledText>;
}

export default TextSize;
