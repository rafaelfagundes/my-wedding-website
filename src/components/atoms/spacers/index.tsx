import React from "react";
import styled from "styled-components";

const StyledHSpacer = styled.div<{ multiplier: number }>`
  width: ${(props) => (props.multiplier ? props.multiplier * 10 : 10)}px;
`;

const StyledVSpacer = styled.div<{ multiplier: number }>`
  height: ${(props) => (props.multiplier ? props.multiplier * 10 : 10)}px;
`;

type SpacerProps = {
  multiplier?: number;
};

export function HSpacer(props: SpacerProps) {
  return <StyledHSpacer multiplier={props.multiplier || 1}></StyledHSpacer>;
}

export function VSpacer(props: SpacerProps) {
  return <StyledVSpacer multiplier={props.multiplier || 1}></StyledVSpacer>;
}
