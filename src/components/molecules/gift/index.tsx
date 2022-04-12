import React, { Dispatch, SetStateAction } from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import Product from "../../../definitions/product";
import Center from "../../atoms/center";
import { VSpacer } from "../../atoms/spacers";

const StyledGift = styled.div`
  background-color: #fff;
  width: ${isMobile ? "90%" : "250px"};
  border-radius: 10px;
  margin-bottom: ${isMobile ? 20 : 40}px;
  min-height: ${isMobile ? undefined : "430px"};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px 15px 20px;
  margin-right: 20px;
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
`;

const Picture = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: ${isMobile ? "90%" : "210px"};
  /* height: ${isMobile ? 290 * 0.5 : 210 * 0.7142857143}px; */
  height: ${isMobile ? 250 : 210}px;
`;

const Divider = styled.div`
  height: 1px;
  width: ${isMobile ? 280 : 210}px;
  background-color: #efefef;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
`;

const Title = styled.div`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  font-size: ${isMobile ? 1.2 : 1}rem;
  line-height: ${isMobile ? 1.6 : 1.2}rem;
  text-align: center;
  color: #6c176c;
  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;

  /* text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; */
`;

const Price = styled.div`
  font-family: "Outfit";
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
  width: ${isMobile ? 290 : 210}px;
`;

const Button = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 10px;
  width: ${isMobile ? 140 : 100}px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ButtonText = styled.div`
  font-family: "Outfit";
  text-transform: uppercase;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
`;

type Props = {
  product: Product | undefined;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
  toggleGiftModal: (paymentMethod: string) => void;
};

function Gift(props: Props) {
  const pay = (paymentMethod: string) => {
    props.setProduct(props.product);
    props.toggleGiftModal(paymentMethod);
  };

  return (
    <StyledGift>
      <VSpacer multiplier={isMobile ? 1 : 0}></VSpacer>
      <Picture image={props?.product?.image || ""}></Picture>
      <VSpacer multiplier={2}></VSpacer>
      <Center>
        <Divider></Divider>
      </Center>
      <VSpacer multiplier={2}></VSpacer>
      <TitleContainer>
        <Title>{props?.product?.name || ""}</Title>
      </TitleContainer>
      <VSpacer multiplier={1}></VSpacer>
      <Price>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(props?.product?.value || 0)}
      </Price>
      <VSpacer multiplier={2}></VSpacer>
      <Center>
        <ButtonsContainer>
          <Button color="#6C176C" onClick={() => pay("pix")}>
            <ButtonText>pix</ButtonText>
          </Button>
          <Button color="#29B9B9" onClick={() => pay("cc")}>
            <ButtonText>cartão</ButtonText>
          </Button>
        </ButtonsContainer>
      </Center>
    </StyledGift>
  );
}

export default Gift;
