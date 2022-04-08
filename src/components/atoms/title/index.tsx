import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";

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

const StyledTitle = styled.div<{ color?: string }>`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  font-size: ${isMobile ? 2 : 3.5}rem;
  line-height: ${isMobile ? 3 : 4.2}rem;
  letter-spacing: -0.035em;
  text-align: center;
  margin: 0;
  padding: 0;

  ${(props) => gradientBackgroundOrSolidColor(props.color)}

  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
  /* text-fill-color: transparent; */
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
