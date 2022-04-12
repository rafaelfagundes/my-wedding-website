import React, { Dispatch, SetStateAction } from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import useSWR from "swr";
import Product from "../../../definitions/product";
import Center from "../../atoms/center";
import Loading from "../../atoms/loading";
import Paragraph from "../../atoms/paragraph";
import { VSpacer } from "../../atoms/spacers";
import TextSize from "../../atoms/textSize";
import Title from "../../atoms/title";
import WordDivider from "../../atoms/wordDivider";
import Gift from "../../molecules/gift";

const fetcher = (arg: any, ...args: any[]) =>
  fetch(arg, ...args).then((res) => res.json());

const StyledGifts = styled.div`
  background: #d1b370;
  background: linear-gradient(
    117.78deg,
    rgba(209, 179, 112, 0.75) 0%,
    #d1b370 100%
  );
  padding: ${isMobile ? "40px 0 0 0" : "80px 0 0 0"};
`;

const BackgroundImage = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
`;

const GiftsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: ${isMobile ? 90 : 75}vw;
  max-width: ${250 * 4 + 4 * 20}px;
  align-items: center;
  margin-right: -20px;
  justify-content: center;
`;

const FlowerContainer = styled.div<{ size: number }>`
  /* background: #d1b370; */
  height: ${(props) => props.size * 0.32}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* padding-top: 80px; */
`;

const Flower = styled.div<{ image: string; size: number }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size * 0.32}px;
`;

type GiftsProps = {
  toggleGiftModal: (paymentMethod: string) => void;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
  showModal: boolean;
};

function Gifts(props: GiftsProps) {
  const { data, error } = useSWR("/api/gifts", fetcher, {
    refreshInterval: 10000,
    refreshWhenHidden: false,
    revalidateOnFocus: true,
  });

  if (error) {
    console.error(error);
  }

  return (
    <StyledGifts>
      <BackgroundImage image="/images/section.png">
        <Title color="#fff">Presentes</Title>
        <VSpacer multiplier={1}></VSpacer>
        <WordDivider color="#fff">simbólicos*</WordDivider>
        <VSpacer multiplier={4}></VSpacer>
        <Center>
          <TextSize size={600}>
            <Paragraph color="#fff" center>
              Os noivos se mudarão de país, portanto não poderão levar seu
              amável presente. Mas comprarão por lá o mesmo produto ou algo que
              lembre você(s).
            </Paragraph>
          </TextSize>
        </Center>
        <VSpacer multiplier={isMobile ? 4 : 6}></VSpacer>
        {!data && (
          <>
            <Center>
              <Loading size={50}></Loading>
            </Center>
            <VSpacer multiplier={6}></VSpacer>
          </>
        )}
        <Center>
          <GiftsContainer>
            {data &&
              data.map((p: Product) => (
                <Gift
                  key={p.id}
                  product={p}
                  setProduct={props.setProduct}
                  toggleGiftModal={props.toggleGiftModal}
                ></Gift>
              ))}
          </GiftsContainer>
        </Center>
      </BackgroundImage>
      <VSpacer multiplier={isMobile ? 2 : 4}></VSpacer>
      <FlowerContainer size={250}>
        <Flower image="/images/ft-flower.png" size={250}></Flower>
      </FlowerContainer>
    </StyledGifts>
  );
}

export default Gifts;
