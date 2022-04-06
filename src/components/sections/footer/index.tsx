import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100vw;
`;

const FlowerContainer = styled.div<{ size: number }>`
  background: #d1b370;
  height: ${(props) => props.size * 0.32}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Flower = styled.div<{ image: string; size: number }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size * 0.32}px;
`;

const Credits = styled.div`
  display: flex;
  background-color: #3f3f3f;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const CreditsText = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.035em;
  color: #ffffff;
`;

const SIZE = 250;

function Footer() {
  return (
    <StyledFooter>
      <FlowerContainer size={SIZE}>
        <Flower image="/images/ft-flower.png" size={SIZE}></Flower>
      </FlowerContainer>
      <Credits>
        <CreditsText>Desenvolvido por Rafael Fagundes - 2022</CreditsText>
      </Credits>
    </StyledFooter>
  );
}

export default Footer;
