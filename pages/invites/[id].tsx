import { GetStaticPropsContext } from "next";
import React from "react";
import styled from "styled-components";
import { server } from "../../config";
import { VSpacer } from "../../src/components/atoms/spacers";
import Guest from "../../src/definitions/guest";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledInvite = styled.div<{ size: number }>`
  position: relative;
  width: ${(props) => props.size * 0.7058823529}vh;
  height: ${(props) => props.size}vh;
  background: linear-gradient(
    153.51deg,
    rgba(239, 149, 157, 0.81) 0%,
    #ef959d 100%
  );
`;

const Content = styled.div<{ size: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => props.size - 8}vh;
`;

const Couple = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.div`
  font-family: "Playfair Display";
  font-size: 8.7vh;
  line-height: 8.7vh;
  text-align: center;
  color: #ffffff;
  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
`;

const Separator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2vh 0vh 1.2vh 0vh;
`;

const Line = styled.div`
  width: 15vh;
  height: 1px;
  background-color: #ffffff;
`;

const And = styled.div`
  color: #ffffff;
  margin: 0 2.2vh;
  font-family: "Playfair Display";
  font-size: 4.5vh;
  line-height: 4.5vh;
  text-align: center;
  color: #ffffff;
  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
`;

const Invites = styled.div`
  font-family: "Playfair Display";
  font-style: italic;
  font-weight: 400;
  font-size: 4.5vh;
  line-height: 4.5vh;
  text-align: center;
  color: #643b6d;
  margin-top: 15px;
  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
`;

const Text = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 2.5vh;
  line-height: 4.2vh;
  text-align: center;
  letter-spacing: -0.01em;
  width: 45vh;
  color: #ffffff;
`;

const GuestName = styled.span`
  font-weight: 700;
`;

const Date = styled.div`
  background: #ffffff;
  width: 33vh;
  height: 6.5vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2vh 0;
`;

const DateText = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 2.3vh;
  line-height: 2.3vh;
  text-align: center;
  letter-spacing: 0.2vh;
  text-transform: uppercase;

  color: #ef959d;
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Address = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 2.3vh;
  line-height: 3vh;
  text-align: center;
  color: #ffffff;
`;

const LocationName = styled(Address)`
  font-weight: 700;
`;

const TopFlower = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 55.94771242vh;
  height: 51.96078431vh;
  background-image: url(/images/tl-flower.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const BottomFlower = styled.div`
  width: 25vh;
  height: ${25 / 3}vh;
  background-image: url(/images/ft-flower.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.8vh;
`;

const Footer = styled.div<{ size: number }>`
  width: ${(props) => props.size * 0.7058823529}vh;
  height: 8vh;
  background: #6b4e71;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2vh;
`;

const Empty = styled.div`
  width: 14vh;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FooterImage = styled.div`
  width: 2.3vh;
  height: 2.3vh;
  background-image: url(/icons/info.png);
  background-position: center;
  background-size: cover;
  margin-right: 0.9vh;
`;

const FooterText = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 2.1vh;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

const WebsiteUrl = styled.a`
  text-decoration: underline;
`;

const Code = styled.div`
  background: rgba(255, 255, 255, 0.8);
  width: 16vh;
  height: 5.3vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.8vh;
`;

const CodeTitle = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2vh;
  line-height: 1.1vh;
  color: #6b4e71;
`;

const CodeValue = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 3.2vh;
  line-height: 3.2vh;
  color: #6b4e71;
`;

type Props = {
  guest: Guest;
};

function getGuests(guest: Guest) {
  if (guest.numberOfGuests === 3) {
    return (
      <>
        <GuestName>{guest.firstGuest?.toUpperCase()}</GuestName>,{" "}
        <GuestName>{guest.secondGuest?.toUpperCase()}</GuestName> E{" "}
        <GuestName>{guest.thirdGuest?.toUpperCase()}</GuestName> PARA CELEBRAREM
        SEU CASAMENTO
      </>
    );
  } else if (guest.numberOfGuests === 2) {
    return (
      <>
        <GuestName>{guest.firstGuest?.toUpperCase()}</GuestName> E{" "}
        <GuestName>{guest.secondGuest?.toUpperCase()}</GuestName> PARA
        CELEBRAREM SEU CASAMENTO
      </>
    );
  } else {
    return (
      <>
        <GuestName>{guest.firstGuest?.toUpperCase()}</GuestName> PARA CELEBRAREM
        SEU CASAMENTO
      </>
    );
  }
}

function Invite({ guest }: Props) {
  console.log("router", router);

  if (!guest) {
    return <></>;
  }

  return (
    <Container>
      <StyledInvite size={100}>
        <TopFlower></TopFlower>
        <Content size={100}>
          <VSpacer multiplier={10}></VSpacer>
          <Couple>
            <Name>Elisa</Name>
            <Separator>
              <Line></Line>
              <And>&</And>
              <Line></Line>
            </Separator>
            <Name>Rafael</Name>
          </Couple>
          <Invites>~ convidam ~</Invites>
          <Text>{getGuests(guest)}</Text>
          <Date>
            <DateText>21 maio 2022 às 13:00</DateText>
          </Date>
          <Location>
            <LocationName>POUSADA RECANTO DA ALEGRIA</LocationName>
            <Address>R. Gino Ovídio Della Croce, 223</Address>
            <Address>São João del Rei - MG</Address>
          </Location>
          <BottomFlower></BottomFlower>
        </Content>
        <Footer size={100}>
          <FooterContent>
            <FooterImage></FooterImage>
            <FooterText>
              Confirme sua presença em:{" "}
              <WebsiteUrl
                href={`https://www.elisarafael.com?guestId=${guest.id}`}
              >
                www.elisarafael.com
              </WebsiteUrl>
            </FooterText>
          </FooterContent>
          <Code>
            <CodeTitle>CÓDIGO DE CONVIDADO</CodeTitle>
            <CodeValue>{guest.id}</CodeValue>
          </Code>
        </Footer>
      </StyledInvite>
    </Container>
  );
}

type Params = {
  params: {
    id: string;
  };
};

export async function getStaticPaths() {
  const paramIds: Params[] = [];
  try {
    const url = `${server}/api/confirmation?option=guestids&pwd=conestoga`;

    const response = await fetch(url);

    if (response.status === 200) {
      const ids = await response.json();
      ids.forEach((i: string) => {
        paramIds.push({ params: { id: i } });
      });
    } else {
      paramIds.push({ params: { id: "z4zw5b" } });
    }
  } catch (error) {
    paramIds.push({ params: { id: "z4zw5b" } });
  }

  return {
    paths: paramIds,
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  let guest = null;

  try {
    const url = `${server}/api/confirmation?id=${context?.params?.id}`;

    const response = await fetch(url);

    guest = await response.json();
  } catch (error) {
    console.log("error", error);
  }

  return {
    props: {
      guest,
    },
  };
}

export default Invite;
