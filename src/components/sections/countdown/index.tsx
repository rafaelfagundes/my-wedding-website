import React from "react";
import ReactCountdown from "react-countdown";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import Center from "../../atoms/center";
import { VSpacer } from "../../atoms/spacers";

const StyledCountdown = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${isMobile ? 150 : 300}px;
`;

const Shade = styled.div`
  background-color: rgba(13, 97, 97, 0.6);
`;

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: ${isMobile ? 80 : 50}%;
  max-width: ${isMobile ? 90 : 60}%;
  justify-content: space-between;
  align-items: center;
  height: ${isMobile ? 150 : 300}px;
`;

const StyledNumberAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Value = styled.div`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: ${isMobile ? 3 : 4}rem;
  line-height: ${isMobile ? 3 : 5}rem;
  text-align: center;
  color: #ffffff;
  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
`;

const Description = styled.div`
  font-family: "Playfair Display";
  font-style: italic;
  font-weight: 400;
  font-size: ${isMobile ? 1 : 1.5}rem;
  line-height: ${isMobile ? 1 : 1.5}rem;
  text-align: center;
  color: #ffffff;
  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
`;

interface NumberAndDescriptionProps {
  value: number;
  children: string;
}

function NumberAndDescription(props: NumberAndDescriptionProps) {
  return (
    <StyledNumberAndDescription>
      <Value>{props.value}</Value>
      <VSpacer multiplier={2}></VSpacer>
      <Description>{props.children}</Description>
    </StyledNumberAndDescription>
  );
}

interface CountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function Countdown() {
  const renderer = ({ days, hours, minutes, seconds }: CountdownProps) => {
    return (
      <Shade>
        <Center>
          <CountdownContainer>
            <NumberAndDescription value={days}>dias</NumberAndDescription>
            <NumberAndDescription value={hours}>horas</NumberAndDescription>
            <NumberAndDescription value={minutes}>minutos</NumberAndDescription>
            <NumberAndDescription value={seconds}>
              segundos
            </NumberAndDescription>
          </CountdownContainer>
        </Center>
      </Shade>
    );
  };

  return (
    <StyledCountdown image="/images/countdown-bg.jpg">
      <ReactCountdown
        date={new Date(2022, 4, 21, 13, 0, 0)}
        renderer={renderer}
      ></ReactCountdown>
    </StyledCountdown>
  );
}

export default Countdown;
