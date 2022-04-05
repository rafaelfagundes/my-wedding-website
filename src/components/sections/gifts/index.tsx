import React from "react";
import styled from "styled-components";
import Center from "../../atoms/center";
import Paragraph from "../../atoms/paragraph";
import { VSpacer } from "../../atoms/spacers";
import Title from "../../atoms/title";
import WordDivider from "../../atoms/wordDivider";
import Gift from "../../molecules/gift";

const StyledGifts = styled.div`
  background: #d1b370;
  padding: 80px 0 40px 0;
`;

const Text = styled.div`
  max-width: 600px;
`;

const GiftsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 75vw;
  align-items: center;
  margin-right: -20px;

  &::after {
    content: "";
    flex: auto;
  }
`;

function Gifts() {
  return (
    <StyledGifts>
      <Title color="#fff">Presentes</Title>
      <VSpacer multiplier={1}></VSpacer>
      <WordDivider color="#fff">simbólicos*</WordDivider>
      <VSpacer multiplier={4}></VSpacer>
      <Center>
        <Text>
          <Paragraph color="#fff" center>
            Os noivos se mudarão de país, portanto não poderão levar seu amável
            presente. Mas comprarão por lá o mesmo produto ou algo que lembre
            você(s).
          </Paragraph>
        </Text>
      </Center>
      <VSpacer multiplier={6}></VSpacer>
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
    </StyledGifts>
  );
}

export default Gifts;
