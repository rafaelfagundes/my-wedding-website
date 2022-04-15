import Head from "next/head";
import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import Button from "../atoms/button";
import Center from "../atoms/center";
import Paragraph from "../atoms/paragraph";
import { VSpacer } from "../atoms/spacers";
import Title from "../atoms/title";

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

type Props = {
  title: string;
  children: string[];
  buttonText: string;
  buttonAction: React.MouseEventHandler<HTMLDivElement>;
};

function OrderStatus(props: Props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Obrigado pelo presente" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background
        image={
          isMobile
            ? "/images/confirmation-flower-vertical.jpg"
            : "/images/confirmation-flower.jpg"
        }
      >
        <VSpacer multiplier={6}></VSpacer>
        <Title>{props.title}</Title>
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
