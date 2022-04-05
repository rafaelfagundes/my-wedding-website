import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
`;
const Line = styled.div<{ color?: string }>`
  width: 80px;
  height: 1px;
  background-color: ${(props) => (props.color ? props.color : "#6b4e71")};
`;

const Word = styled.div<{ color?: string }>`
  font-family: "Playfair Display";
  font-size: 1rem;
  color: ${(props) => (props.color ? props.color : "#6b4e71")};
  margin: 0 10px 0 10px;
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
