import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
`;
const Line = styled.div<{ color?: string }>`
  width: ${isMobile ? 60 : 80}px;
  height: 1px;
  background-color: ${(props) => (props.color ? props.color : "#6b4e71")};
`;

const Word = styled.div<{ color?: string }>`
  font-family: "Playfair Display";
  font-size: 1rem;
  color: ${(props) => (props.color ? props.color : "#6b4e71")};
  margin: 0 10px 0 10px;
  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
`;

interface Props {
  children: string;
  color?: string;
}

function WordDivider(props: Props) {
  return (
    <Row>
      <Line color={props.color}></Line>
      <Word color={props.color}>{props.children}</Word>
      <Line color={props.color}></Line>
    </Row>
  );
}

export default WordDivider;
