import React from "react";
import ReactCountdown from "react-countdown";
import styled from "styled-components";
import Center from "../../atoms/center";
import { VSpacer } from "../../atoms/spacers";

const StyledCountdown = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
`;

const Shade = styled.div`
  background-color: rgba(13, 97, 97, 0.6);
`;

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 50%;
  max-width: 60%;
  justify-content: space-between;
  align-items: center;
  height: 300px;
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
  font-size: 56px;
  line-height: 75px;
  text-align: center;
  color: #ffffff;
`;

const Description = styled.div`
  font-family: "Playfair Display";
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
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

function Countdown() {
  const renderer = ({ days, hours, minutes, seconds }) => {
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
