import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
`;
const Line = styled.div`
  width: 80px;
  height: 1px;
  background-color: #6b4e71;
`;

const Word = styled.div`
  font-family: "Playfair Display";
  font-size: 1rem;
  color: #6b4e71;
  margin: 0 10px 0 10px;
`;

interface Props {
  children: string;
}

function WordDivider(props: Props) {
  return (
    <Row>
      <Line></Line>
      <Word>{props.children}</Word>
      <Line></Line>
    </Row>
  );
}

export default WordDivider;
