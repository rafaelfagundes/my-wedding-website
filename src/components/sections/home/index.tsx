import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { Text as TextProps } from "../../../definitions/text";
import Center from "../../atoms/center";
import Paragraph from "../../atoms/paragraph";
import { VSpacer } from "../../atoms/spacers";
import TextSize from "../../atoms/textSize";
import Title from "../../atoms/title";

const StyledHome = styled.div``;

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: ${isMobile ? 422 : 540}px;
  left: 0px;
  top: 0px;

  background-color: #29b9b9;
  background: linear-gradient(
    100.09deg,
    rgba(41, 185, 185, 0.7) 0%,
    #29b9b9 100%
  );
  z-index: -10;
`;

const HeaderTitle = styled.div`
  font-family: "Playfair Display";
  font-size: ${isMobile ? 3 : 7}rem;
  line-height: ${isMobile ? 3 : 7}rem;
  color: #ffffff;
  top: ${isMobile ? 130 : 150}px;
  position: relative;
  text-align: center;
  max-width: ${isMobile ? "155px" : undefined};
  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
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
  top: ${isMobile ? 144 : 148}px;
`;

type Props = {
  text: TextProps;
};

function Home(props: Props) {
  return (
    <StyledHome>
      <Background></Background>
      <Center>
        <HeaderTitle>{props.text.hero}</HeaderTitle>
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
      <VSpacer multiplier={isMobile ? 16 : 16}></VSpacer>
      <Title>{props.text.hometitle}</Title>
      <VSpacer multiplier={2}></VSpacer>
      <Center>
        <TextSize size={600}>
          <Paragraph center>{props.text.hometext}</Paragraph>
        </TextSize>
      </Center>
      <VSpacer multiplier={3}></VSpacer>
      <Center>
        <EndFlower image="/images/divider-flower.jpg"></EndFlower>
      </Center>
      <VSpacer multiplier={isMobile ? 4 : 7}></VSpacer>
    </StyledHome>
  );
}

export default Home;
