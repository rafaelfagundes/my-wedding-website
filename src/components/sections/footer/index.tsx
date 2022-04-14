import React from "react";
import styled from "styled-components";
import { Text } from "../../../definitions/text";

const StyledFooter = styled.div`
  width: 100vw;
`;

const Credits = styled.div`
  display: flex;
  background-color: #3f3f3f;
  background: linear-gradient(
    271.06deg,
    #3f3f3f 0%,
    rgba(63, 63, 63, 0.9) 100%
  );
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

type Props = {
  text: Text;
};

function Footer(props: Props) {
  return (
    <StyledFooter>
      <Credits>
        <CreditsText>{props.text.footertext}</CreditsText>
      </Credits>
    </StyledFooter>
  );
}

export default Footer;
