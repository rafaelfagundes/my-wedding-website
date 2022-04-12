import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";

function getFontSize(size: number) {
  if (isMobile) {
    return 1 * size;
  } else {
    return 1.5 * size;
  }
}

function getLineHeight(size: number) {
  if (isMobile) {
    return 1.6 * size;
  } else {
    return 2.5 * size;
  }
}

const StyledParagraph = styled.div<{
  center?: boolean;
  color?: string;
  size?: number;
}>`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => getFontSize(props.size || 1)}rem;
  line-height: ${(props) => getLineHeight(props.size || 1)}rem;
  text-align: ${(props) => (props.center ? "center" : "undefined")};
  color: ${(props) => (props.color ? props.color : "#1f9292")};
  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
`;

type Props = {
  children: any;
  center?: boolean;
  color?: string;
  size?: number;
};

function Paragraph(props: Props) {
  return (
    <StyledParagraph
      center={props.center}
      color={props.color}
      size={props.size}
    >
      {props.children}
    </StyledParagraph>
  );
}

export default Paragraph;
