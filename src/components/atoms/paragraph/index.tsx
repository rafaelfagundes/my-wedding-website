import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.div<{ center?: boolean }>`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  /* font-size: 22px; */
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-align: ${(props) => (props.center ? "center" : "undefined")};
  color: #1f9292;
`;

interface Props {
  children: string;
  center?: boolean;
}

function Paragraph(props: Props) {
  return (
    <StyledParagraph center={props.center}>{props.children}</StyledParagraph>
  );
}

export default Paragraph;
