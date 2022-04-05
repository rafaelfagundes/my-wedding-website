import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import Center from "../../atoms/center";
import Paragraph from "../../atoms/paragraph";
import { VSpacer } from "../../atoms/spacers";
import Title from "../../atoms/title";
import WordDivider from "../../atoms/wordDivider";
import Gift from "../../molecules/gift";

const StyledGifts = styled.div`
  background: #d1b370;
  padding: ${isMobile ? "40px 0 20px 0" : "80px 0 40px 0"};
`;

const BackgroundImage = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
`;

const Text = styled.div`
  max-width: 600px;
  padding: 0 40px;
`;

const GiftsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: ${isMobile ? 90 : 75}vw;
  max-width: ${250 * 4 + 4 * 20}px;
  align-items: center;
  margin-right: -20px;
  justify-content: center;
`;

function Gifts() {
  return (
    <StyledGifts>
      <BackgroundImage image="/images/section.png">
        <Title color="#fff">Presentes</Title>
        <VSpacer multiplier={1}></VSpacer>
        <WordDivider color="#fff">simbólicos*</WordDivider>
        <VSpacer multiplier={4}></VSpacer>
        <Center>
          <Text>
            <Paragraph color="#fff" center>
              Os noivos se mudarão de país, portanto não poderão levar seu
              amável presente. Mas comprarão por lá o mesmo produto ou algo que
              lembre você(s).
            </Paragraph>
          </Text>
        </Center>
        <VSpacer multiplier={isMobile ? 4 : 6}></VSpacer>
        <Center>
          <GiftsContainer>
            <Gift></Gift>
            <Gift></Gift>
            <Gift></Gift>
            <Gift></Gift>
            <Gift></Gift>
            <Gift></Gift>
          </GiftsContainer>
        </Center>
      </BackgroundImage>
    </StyledGifts>
  );
}

export default Gifts;
