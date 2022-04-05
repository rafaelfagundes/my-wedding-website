import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 75px;
  text-align: center;
`;

interface TitleProps {
  children: string;
}

function Title(props: TitleProps) {
  return (
    <>
      <StyledTitle>{props.children}</StyledTitle>
    </>
  );
}

export default Title;
