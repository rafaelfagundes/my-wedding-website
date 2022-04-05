import React from "react";
import styled from "styled-components";
import Center from "../../atoms/center";
import Paragraph from "../../atoms/paragraph";
import { VSpacer } from "../../atoms/spacers";
import Title from "../../atoms/title";

const StyledHome = styled.div`
  min-height: 1080px;
`;

const Background = styled.div`
  position: absolute;
  width: calc(100vw - 15px);
  height: 540px;
  left: 0px;
  top: 0px;

  background-color: #29b9b9;
  z-index: -10;
`;

const HeaderTitle = styled.div`
  font-family: "Playfair Display";
  font-size: 7rem;
  text-align: center;
  color: #ffffff;
  top: 140px;
  position: relative;
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
  width: 455px;
  height: 423px;
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

const Couple = styled.div<{ image: string }>`
  width: 400px;
  height: 400px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  left: calc(50% - 200px);
  position: relative;
  top: 112px;
`;

const Text = styled.div`
  max-width: 600px;
`;

function Home() {
  return (
    <StyledHome>
      <Background></Background>
      <HeaderTitle>Elisa & Rafael</HeaderTitle>
      <FlowersA image="images/tl-flower.png"></FlowersA>
      <FlowersB image="images/tr-flower.png"></FlowersB>
      <FlowersC image="images/bl-flower.png"></FlowersC>
      <FlowersD image="images/br-flower.png"></FlowersD>
      <Couple image="images/couple.png"></Couple>
      <VSpacer multiplier={12}></VSpacer>
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
    </StyledHome>
  );
}

export default Home;
