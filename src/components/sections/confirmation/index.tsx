import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import Center from "../../atoms/center";
import Paragraph from "../../atoms/paragraph";
import { VSpacer } from "../../atoms/spacers";
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

const Button = styled.div`
  width: 235px;
  height: 50px;
  background: #6c176c;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ButtonText = styled.div`
  font-family: "Outfit";
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.2rem;
  color: #ffffff;
  text-transform: uppercase;
`;

const Text = styled.div`
  max-width: 680px;
  padding: 0 40px;
`;

interface Props {
  toggleConfirmationModal: () => void;
  showModal: boolean;
}

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
      <Title>Confirme Sua Presença</Title>
      <VSpacer multiplier={1}></VSpacer>
      <WordDivider>eu vou!</WordDivider>
      <VSpacer multiplier={isMobile ? 2 : 4}></VSpacer>
      <Center>
        <Text>
          <Paragraph center color="#6c176c">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet.
          </Paragraph>
        </Text>
      </Center>
      <VSpacer multiplier={isMobile ? 3 : 5}></VSpacer>
      <Center>
        <Button onClick={() => props.toggleConfirmationModal(!props.showModal)}>
          <ButtonText>Confirmar Presença</ButtonText>
        </Button>
      </Center>
    </Background>
  );
}

export default Confirmation;
