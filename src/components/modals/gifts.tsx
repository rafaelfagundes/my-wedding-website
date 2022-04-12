import { QrCodePix } from "qrcode-pix";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import Product from "../../definitions/product";
import Center from "../atoms/center";
import Paragraph from "../atoms/paragraph";
import { VSpacer } from "../atoms/spacers";
import TextSize from "../atoms/textSize";
import Title from "../atoms/title";

const Container = styled.div<{ showModal: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${(props) => (props.showModal ? 100 : -100)};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.div`
  width: 40px;
  height: 40px;
  box-shadow: 0px 3.2px 32px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background: #cc3f4b;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  top: -15px;
  left: -55px;
`;

const MobileCloseButton = styled(CloseButton)`
  position: relative;
  top: 70px;
  left: 0px;
`;

const CloseButtonText = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.15rem;
  text-align: center;
  color: #ffffff;
`;

const Frame = styled.div<{ zoom: number }>`
  width: ${isMobile ? "90%" : "600px"};
  background-color: white;
  border-radius: 20px;
  padding: ${isMobile ? "0px 20px 10px 20px" : "0px 40px 60px 40px"};
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
  z-index: 101;

  transition: transform 0.4s ease-in-out;
  transform: scale(${(props) => props.zoom});
`;

const ActionButton = styled.div`
  width: 250px;
  height: 50px;

  background: #6c176c;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ButtonText = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.2rem;
  text-align: center;

  color: #ffffff;
  text-transform: uppercase;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
`;

const PSText = styled.span`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.3rem;
  text-align: center;

  color: #6c176c;
`;

const ProductValue = styled.span`
  font-family: "Outfit";
  font-weight: 700;
  color: #9f229f;
  font-size: 1.2rem;
`;

const PixKey = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  letter-spacing: 0.035em;
  color: #37985c;
`;

const QRCodeImage = styled.div<{ image: string; size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-size: contain;
  background-position: center;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
`;

type Props = {
  toggleGiftModal: (paymentMethod: string) => void;
  showModal: boolean;
  product: Product | undefined;
  paymentMethod: string;
};

type QRCodeProps = {
  payload: () => string;
  base64: (options?: any) => Promise<string>;
};

function GiftModal(props: Props) {
  const [qRCode, setQRCode] = useState<QRCodeProps>();
  const [qrcodeImage, setQrcodeImage] = useState<string>();

  const generateQrcodeImage = async (qrcode: QRCodeProps) => {
    const generatedImage = await qrcode.base64();
    console.log("generatedImage", generatedImage);
    setQrcodeImage(generatedImage);
  };

  useEffect(() => {
    const qrcode = QrCodePix({
      version: "01",
      key: "pix@rafaelfagundes.com", //or any PIX key
      name: "Rafael Fagundes",
      city: "SAO JOAO DEL REI",
      transactionId: `PROD-${String(props.product?.refCode).padStart(4, "0")}`,
      message: "Presente de casamento para Elisa e Rafael",
      cep: "36309012",
      value: props.product?.value,
    });

    setQRCode(qrcode);
    generateQrcodeImage(qrcode);
  }, [props.product]);

  return (
    <Container showModal={props.showModal}>
      <Frame zoom={props.showModal ? 1 : 0}>
        {!isMobile && (
          <CloseButton
            onClick={() => props.toggleGiftModal(props.paymentMethod)}
          >
            <CloseButtonText>X</CloseButtonText>
          </CloseButton>
        )}
        <Title size={0.8}>
          {props.paymentMethod === "pix"
            ? "Pagar com Pix"
            : "Pagar com Cartão ou Boleto"}
        </Title>
        <VSpacer multiplier={2}></VSpacer>

        {props.paymentMethod === "cc" && (
          <>
            <Center>
              <TextSize size={500}>
                <Paragraph center size={0.8}>
                  O pagamento será processado pelo Mercado Pago, não é
                  necessário criar uma conta.
                </Paragraph>
              </TextSize>
            </Center>
            <VSpacer multiplier={3}></VSpacer>
            <Center>
              <a
                href={props.product?.linkMercadoPago}
                target="_blank"
                rel="noreferrer"
              >
                <ActionButton>
                  <ButtonText>Continuar Pagamento</ButtonText>
                </ActionButton>
              </a>
            </Center>
            <VSpacer multiplier={3}></VSpacer>
            <HorizontalLine></HorizontalLine>
            <VSpacer multiplier={2}></VSpacer>
            <Paragraph center size={0.8}>
              Siga as instruções na tela do Mercado Pago.
            </Paragraph>
            <VSpacer multiplier={1}></VSpacer>
            <Center>
              <PSText>É possível parcelar em até 12x.</PSText>
            </Center>
          </>
        )}

        {props.paymentMethod === "pix" && (
          <>
            <Center>
              <QRCodeImage size={250} image={String(qrcodeImage)}></QRCodeImage>
            </Center>
            <VSpacer multiplier={1.5}></VSpacer>
            <Center>
              <TextSize size={500}>
                <Paragraph center size={0.8}>
                  Caso prefira, pode copiar os dados e colar no seu banco (Pix
                  Copia & Cola)
                </Paragraph>
              </TextSize>
            </Center>
            <VSpacer multiplier={3}></VSpacer>
            <Center>
              <ActionButton
                onClick={() =>
                  navigator.clipboard.writeText(String(qRCode?.payload()))
                }
              >
                <ButtonText>Copiar Dados do Pix</ButtonText>
              </ActionButton>
            </Center>
            <VSpacer multiplier={3}></VSpacer>
            <HorizontalLine></HorizontalLine>
            <VSpacer multiplier={2}></VSpacer>
            <Paragraph center size={0.8}>
              Ou envie o valor (
              <ProductValue>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(props?.product?.value || 0)}
              </ProductValue>
              ) diretamente para:
            </Paragraph>
            <VSpacer multiplier={1}></VSpacer>
            <PixKey>pix@rafaelfagundes.com</PixKey>
          </>
        )}
        {isMobile && (
          <Center>
            <MobileCloseButton
              onClick={() => props.toggleGiftModal(props.paymentMethod)}
            >
              <CloseButtonText>X</CloseButtonText>
            </MobileCloseButton>
          </Center>
        )}
      </Frame>
    </Container>
  );
}

export default GiftModal;
