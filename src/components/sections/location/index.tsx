import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { Text as TextProps } from "../../../definitions/text";
import Center from "../../atoms/center";
import LittleFlower from "../../atoms/littleFlower";
import { VSpacer } from "../../atoms/spacers";
import Title from "../../atoms/title";
import WordDivider from "../../atoms/wordDivider";

const StyledLocation = styled.div`
  background-color: #e792a6;
  background: linear-gradient(
    299.82deg,
    #e792a6 0%,
    rgba(231, 146, 166, 0.8) 100%
  );
  padding: ${isMobile ? "40px 0 50px 0" : "80px 0 100px 0"};
`;

const Container = styled.div`
  width: ${isMobile ? 90 : 75}vw;
  max-width: 850px;
  background-color: white;
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const Picture = styled.div<{ image: string }>`
  width: 40%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const DataContainer = styled.div`
  width: ${isMobile ? 100 : 60}%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0 50px 0;
`;

const Names = styled.div``;

const Name = styled.div`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: ${isMobile ? 2.2 : 3.2}rem;
  line-height: ${isMobile ? 2.9 : 3.9}rem;
  text-align: center;
  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
  background: linear-gradient(90.71deg, #be667b 0.24%, #6c176c 101.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Date = styled.div`
  font-family: "Outfit";
  font-weight: 200;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 0.085em;
  text-transform: uppercase;
  color: #6b4e71;
`;

const Address = styled.div`
  font-family: "Playfair Display";
  font-weight: 200;
  font-size: ${isMobile ? 0.9 : 1}rem;
  /* letter-spacing: 0.085em; */
  color: #6b4e71;
  text-align: center;
  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
`;

const MainAddress = styled.div`
  font-family: "Outfit";
  font-weight: 500;
  font-size: ${isMobile ? 0.9 : 1}rem;
  letter-spacing: 0.085em;
  color: #ef959d;
  text-align: center;
  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
  margin-bottom: 5px;
`;

const Button = styled.button`
  cursor: pointer;
  border: 2px solid #e792a6;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 10px 20px;
`;

const ButtonImage = styled.div<{ image: string }>`
  height: 28px;
  width: 28px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 5px;
`;

const ButtonText = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 0.085em;
  text-transform: uppercase;
  color: #ef959d;
`;

type Props = {
  text: TextProps;
};

function Location(props: Props) {
  return (
    <StyledLocation>
      <Center>
        <Title color="white">{props.text.locationtitle}</Title>
      </Center>
      <VSpacer multiplier={isMobile ? 2.5 : 5}></VSpacer>
      <Center>
        <Container>
          {!isMobile && <Picture image="/images/location.jpg"></Picture>}
          <DataContainer>
            <Center>
              <LittleFlower></LittleFlower>
            </Center>
            <VSpacer multiplier={2}></VSpacer>
            <Names>
              <Name>{props.text.locationname1}</Name>
              <VSpacer multiplier={isMobile ? 1 : 2}></VSpacer>
              <WordDivider>&</WordDivider>
              <VSpacer multiplier={isMobile ? 0.4 : 1}></VSpacer>
              <Name>{props.text.locationname2}</Name>
            </Names>
            <VSpacer multiplier={isMobile ? 3 : 4}></VSpacer>
            <Date>{props.text.locationdate}</Date>
            <VSpacer multiplier={isMobile ? 3 : 4}></VSpacer>
            <MainAddress>{props.text.locationmainaddress}</MainAddress>
            <Address>{props.text.locationaddress1}</Address>
            <Address>{props.text.locationaddress2}</Address>
            <VSpacer multiplier={4}></VSpacer>

            <a href={props.text.locationlink}>
              <Button>
                <ButtonImage image="/icons/map.svg"></ButtonImage>
                <ButtonText>Ver Mapa</ButtonText>
              </Button>
            </a>
          </DataContainer>
        </Container>
      </Center>
    </StyledLocation>
  );
}

export default Location;
