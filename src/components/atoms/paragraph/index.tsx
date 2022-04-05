import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.div<{ center?: boolean; color?: string }>`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  /* font-size: 22px; */
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-align: ${(props) => (props.center ? "center" : "undefined")};
  color: ${(props) => (props.color ? props.color : "#1f9292")};
`;

interface Props {
  children: string;
  center?: boolean;
  color?: string;
}

function Paragraph(props: Props) {
  return (
    <StyledParagraph center={props.center} color={props.color}>
      {props.children}
    </StyledParagraph>
  );
}

export default Paragraph;
