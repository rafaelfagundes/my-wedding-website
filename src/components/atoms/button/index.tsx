import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  width: 235px;
  height: 50px;
  background: #6c176c;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ButtonText = styled.div`
  font-family: "Outfit";
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.2rem;
  color: #ffffff;
  text-transform: uppercase;
`;

type Props = {
  children: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

function Button(props: Props) {
  return (
    <StyledButton onClick={props.onClick}>
      <ButtonText>{props.children}</ButtonText>
    </StyledButton>
  );
}

export default Button;
