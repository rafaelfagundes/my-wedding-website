import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";

const StyledParagraph = styled.div<{ center?: boolean; color?: string }>`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  font-size: ${isMobile ? 1 : 1.5}rem;
  line-height: ${isMobile ? 2 : 2.5}rem;
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
