import React from "react";
import styled from "styled-components";
import Center from "../../atoms/center";
import { VSpacer } from "../../atoms/spacers";

const StyledGift = styled.div`
  background-color: #fff;
  width: 250px;
  height: 348px;
  border-radius: 10px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  margin-right: 20px;
`;

const Picture = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: 210px;
  height: 150px;
`;

const Divider = styled.div`
  height: 1px;
  width: 210px;
  background-color: #e4e4e4;
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
  width: 210px;
`;

const Button = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 10px;
  width: 100px;
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
