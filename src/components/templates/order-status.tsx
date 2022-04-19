import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Button from "../atoms/button";
import Center from "../atoms/center";
import Paragraph from "../atoms/paragraph";
import { VSpacer } from "../atoms/spacers";

const Background = styled.div<{ image: string }>`
  padding: 20px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  font-size: 3rem;
  line-height: 4.4rem;
  letter-spacing: -0.035em;
  text-align: center;
  margin: 0;
  padding: 0;

  background: linear-gradient(90.71deg, #e792a6 0.24%, #6c176c 101.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
`;

const MobileTitle = styled.div`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 3.5rem;
  letter-spacing: -0.035em;
  text-align: center;
  margin: 0;
  padding: 0;

  background: linear-gradient(90.71deg, #e792a6 0.24%, #6c176c 101.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
`;

type Props = {
  title: string;
  children: string[];
  buttonText: string;
  buttonAction: React.MouseEventHandler<HTMLDivElement>;
  isMobile: boolean;
};

function OrderStatus(props: Props) {
  return props.isMobile ? (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Obrigado pelo presente" />
      </Head>
      <Background image="./images/confirmation-flower-vertical.jpg">
        <VSpacer multiplier={6}></VSpacer>
        <MobileTitle key="mobile">{props.title}</MobileTitle>
        <VSpacer multiplier={3}></VSpacer>
        {props.children.map((p) => (
          <span key={p}>
            <Center>
              <Paragraph center>{p}</Paragraph>
            </Center>
          </span>
        ))}
        <VSpacer multiplier={5}></VSpacer>
        <Center>
          <Button onClick={props.buttonAction}>{props.buttonText}</Button>
        </Center>
      </Background>
    </>
  ) : (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Obrigado pelo presente" />
      </Head>
      <Background image="./images/confirmation-flower.jpg">
        <VSpacer multiplier={6}></VSpacer>
        <Title key="desktop">{props.title}</Title>
        <VSpacer multiplier={3}></VSpacer>
        {props.children.map((p) => (
          <span key={p}>
            <Center>
              <Paragraph center>{p}</Paragraph>
            </Center>
          </span>
        ))}
        <VSpacer multiplier={5}></VSpacer>
        <Center>
          <Button onClick={props.buttonAction}>{props.buttonText}</Button>
        </Center>
      </Background>
    </>
  );
}

export default OrderStatus;
