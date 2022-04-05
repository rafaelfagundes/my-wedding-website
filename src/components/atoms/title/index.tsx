import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div<{ color?: string }>`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 3.5rem;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "black")};
  margin: 0;
  padding: 0;
`;

interface TitleProps {
  children: string;
  color?: string;
}

function Title(props: TitleProps) {
  return (
    <>
      <StyledTitle color={props.color}>{props.children}</StyledTitle>
    </>
  );
}

export default Title;
