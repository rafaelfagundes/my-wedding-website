import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import Center from "../../atoms/center";
import { VSpacer } from "../../atoms/spacers";

const StyledGift = styled.div`
  background-color: #fff;
  width: ${isMobile ? 320 : 250}px;
  height: 348px;
  border-radius: 10px;
  margin-bottom: ${isMobile ? 20 : 40}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  margin-right: 20px;
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
`;

const Picture = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: ${isMobile ? 290 : 210}px;
  height: ${isMobile ? 290 * 0.5 : 210 * 0.7142857143}px;
`;

const Divider = styled.div`
  height: 1px;
  width: ${isMobile ? 280 : 210}px;
  background-color: #efefef;
`;

const Title = styled.div`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 29px;
  text-align: center;
  color: #6c176c;
`;

const Price = styled.div`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #e792a6;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${isMobile ? 290 : 210}px;
`;

const Button = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 10px;
  width: ${isMobile ? 140 : 100}px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.div`
  font-family: "Oswald";
  text-transform: uppercase;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

function Gift() {
  return (
    <StyledGift>
      <VSpacer multiplier={isMobile ? 1 : 0}></VSpacer>
      <Picture image="/images/tv.webp"></Picture>
      <VSpacer multiplier={2}></VSpacer>
      <Center>
        <Divider></Divider>
      </Center>
      <VSpacer multiplier={2}></VSpacer>
      <Title>Televisão 8K LG</Title>
      <VSpacer multiplier={1}></VSpacer>
      <Price>R$ 10.500,00</Price>
      <VSpacer multiplier={2}></VSpacer>
      <Center>
        <ButtonsContainer>
          <Button color="#6C176C">
            <ButtonText>pix</ButtonText>
          </Button>
          <Button color="#29B9B9">
            <ButtonText>cartão</ButtonText>
          </Button>
        </ButtonsContainer>
      </Center>
    </StyledGift>
  );
}

export default Gift;
