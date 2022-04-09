import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100vw;
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
      <Credits>
        <CreditsText>Desenvolvido por Rafael Fagundes - 2022</CreditsText>
      </Credits>
    </StyledFooter>
  );
}

export default Footer;
