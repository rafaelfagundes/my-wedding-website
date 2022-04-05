import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import Center from "../../atoms/center";
import Paragraph from "../../atoms/paragraph";
import { VSpacer } from "../../atoms/spacers";
import Title from "../../atoms/title";

const StyledHome = styled.div``;

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: ${isMobile ? 422 : 540}px;
  left: 0px;
  top: 0px;

  background-color: #29b9b9;
  z-index: -10;
`;

const HeaderTitle = styled.div`
  font-family: "Playfair Display";
  font-size: ${isMobile ? 3 : 7}rem;
  color: #ffffff;
  top: ${isMobile ? 110 : 140}px;
  position: relative;
  text-align: center;
  max-width: ${isMobile ? "155px" : undefined};
`;

const Flowers = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-width: 50px;
  min-height: 50px;
  z-index: 1;
`;

const FlowersA = styled(Flowers)`
  position: absolute;
  width: ${isMobile ? 330 : 455}px;
  height: ${isMobile ? 330 * 0.9296703297 : 455 * 0.9296703297}px;
  left: 0px;
  top: 0px;
`;

const FlowersB = styled(Flowers)`
  position: absolute;
  width: 462px;
  height: 185px;
  right: 0px;
  top: 0px;
`;

const FlowersC = styled(Flowers)`
  position: absolute;
  width: 257px;
  height: 194px;
  left: 66px;
  top: 346px;
`;

const FlowersD = styled(Flowers)`
  position: absolute;
  width: 310px;
  height: 183px;
  right: 15px;
  top: 357px;
  z-index: 1;
`;

const EndFlower = styled(Flowers)`
  width: ${isMobile ? 110 : 140}px;
  height: ${isMobile ? 110 * 0.7 : 140 * 0.7}px;
`;

const Couple = styled.div<{ image: string }>`
  width: ${isMobile ? 260 : 400}px;
  height: ${isMobile ? 260 : 400}px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  left: ${isMobile ? `calc(50% - 130px)` : `calc(50% - 200px)`};
  position: relative;
  top: 112px;
`;

const Text = styled.div`
  max-width: 600px;
  padding: 0 40px;
`;

function Home() {
  return (
    <StyledHome>
      <Background></Background>
      <Center>
        <HeaderTitle>Elisa & Rafael</HeaderTitle>
      </Center>
      <FlowersA image="images/tl-flower.png"></FlowersA>
      {!isMobile && (
        <>
          <FlowersB image="images/tr-flower.png"></FlowersB>
          <FlowersC image="images/bl-flower.png"></FlowersC>
          <FlowersD image="images/br-flower.png"></FlowersD>
        </>
      )}
      <Couple image="images/couple.png"></Couple>
      <VSpacer multiplier={14}></VSpacer>
      <Title>Vão Casar</Title>
      <VSpacer multiplier={2}></VSpacer>
      <Center>
        <Text>
          <Paragraph center>
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Maecenas tempus, tellus eget condimentum
            rhoncus.
          </Paragraph>
        </Text>
      </Center>
      <VSpacer multiplier={3}></VSpacer>
      <Center>
        <EndFlower image="/images/divider-flower.jpg"></EndFlower>
      </Center>
      <VSpacer multiplier={isMobile ? 4 : 9}></VSpacer>
    </StyledHome>
  );
}

export default Home;
