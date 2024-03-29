import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";

function getFontSize(size: number) {
  if (isMobile) {
    return 2 * size;
  } else {
    return 3.5 * size;
  }
}

function getLineHeight(size: number) {
  if (isMobile) {
    return 3 * size;
  } else {
    return 4.4 * size;
  }
}

function gradientBackgroundOrSolidColor(color: string | undefined) {
  if (color) {
    return `color: ${color};`;
  } else {
    return `
    background: linear-gradient(90.71deg, #e792a6 0.24%, #6c176c 101.15%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    `;
  }
}

const StyledTitle = styled.div<{ color?: string; size?: number }>`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => getFontSize(props.size || 1)}rem;
  line-height: ${(props) => getLineHeight(props.size || 1)}rem;
  letter-spacing: -0.035em;
  text-align: center;
  margin: 0;
  padding: 0;

  ${(props) => gradientBackgroundOrSolidColor(props.color)}

  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
  /* text-fill-color: transparent; */
`;

type TitleProps = {
  children: string;
  color?: string;
  size?: number;
};

function Title(props: TitleProps) {
  return (
    <>
      <StyledTitle color={props.color} size={props.size}>
        {props.children}
      </StyledTitle>
    </>
  );
}

export default Title;
