import React from "react";
import styled from "styled-components";
import Center from "../../atoms/center";
import { VSpacer } from "../../atoms/spacers";
import Title from "../../atoms/title";
import WordDivider from "../../atoms/wordDivider";

const StyledLocation = styled.div`
  background-color: #e792a6;
  padding: 80px 0 100px 0;
`;

const Container = styled.div`
  width: 75vw;
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
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0 50px 0;
`;

const LittleFlower = styled.div<{ image: string }>`
  width: 32px;
  height: 24px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Names = styled.div``;

const Name = styled.div`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 48.6733px;
  line-height: 65px;
  text-align: center;
`;

const Date = styled.div`
  font-family: "Oswald";
  font-weight: 200;
  font-size: 1rem;
  letter-spacing: 0.085em;
  text-transform: uppercase;
  color: #6b4e71;
`;

const Address = styled.div`
  font-family: "Playfair Display";
  font-weight: 200;
  font-size: 1rem;
  letter-spacing: 0.085em;
  color: #6b4e71;
  text-align: center;
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
  padding: 5px 20px 5px 20px;
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
  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 0.085em;
  text-transform: uppercase;
  color: #ef959d;
`;

function Location() {
  return (
    <StyledLocation>
      <Center>
        <Title color="white">Local & Data</Title>
      </Center>
      <VSpacer multiplier={5}></VSpacer>
      <Center>
        <Container>
          <Picture image="/images/location.jpg"></Picture>
          <DataContainer>
            <Center>
              <LittleFlower image="/images/little-flower.png"></LittleFlower>
            </Center>
            <VSpacer multiplier={2}></VSpacer>
            <Names>
              <Name>Elisa Margotte</Name>
              <VSpacer multiplier={2}></VSpacer>
              <WordDivider>&</WordDivider>
              <VSpacer multiplier={1}></VSpacer>
              <Name>Rafael Fagundes</Name>
            </Names>
            <VSpacer multiplier={4}></VSpacer>
            <Date>21 de maio de 2022 às 13:00</Date>
            <VSpacer multiplier={4}></VSpacer>
            <Address>POUSADA RECANTO DA ALEGRIA</Address>
            <Address>R. Gino Ovídio Della Croce, 223</Address>
            <Address>São João del Rei - MG</Address>
            <VSpacer multiplier={4}></VSpacer>

            <a href="https://goo.gl/maps/aXc4xUkwjMm9pjHn8">
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
