import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { Text as TextProps } from "../../../definitions/text";
import Button from "../../atoms/button";
import Center from "../../atoms/center";
import Paragraph from "../../atoms/paragraph";
import { VSpacer } from "../../atoms/spacers";
import TextSize from "../../atoms/textSize";
import Title from "../../atoms/title";
import WordDivider from "../../atoms/wordDivider";

const Background = styled.div<{ image: string }>`
  padding: ${isMobile ? "40px 0 50px 0" : "40px 100px 100px 100px"};
  background-image: url(${(props) => props.image});
  background-size: 100vw;
  background-position: ${isMobile ? "top" : "center"};
  background-repeat: no-repeat;
  width: 100vw;
`;

const Rings = styled.div<{ image: string; size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size * 0.75}px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

type Props = {
  toggleConfirmationModal: () => void;
  showModal: boolean;
  text: TextProps;
};

function Confirmation(props: Props) {
  return (
    <Background image="/images/confirmation-flower.jpg">
      <Center>
        <Rings
          image={isMobile ? "/images/rings3.png" : "/images/rings.jpg"}
          size={isMobile ? 250 : 400}
        ></Rings>
      </Center>
      {isMobile && <VSpacer multiplier={1}></VSpacer>}
      <Title>{props.text.confirmationtitle}</Title>
      <VSpacer multiplier={1}></VSpacer>
      <WordDivider>{props.text.confirmationseparator}</WordDivider>
      <VSpacer multiplier={isMobile ? 2 : 4}></VSpacer>
      <Center>
        <TextSize size={600}>
          <Paragraph center color="#6c176c">
            {props.text.confirmationtext}
          </Paragraph>
        </TextSize>
      </Center>
      <VSpacer multiplier={isMobile ? 3 : 5}></VSpacer>
      <Center>
        <Button onClick={() => props.toggleConfirmationModal()}>
          {props.text.confirmationbutton}
        </Button>
      </Center>
    </Background>
  );
}

export default Confirmation;
