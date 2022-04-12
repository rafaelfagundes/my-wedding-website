import axios from "axios";
import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import Guest from "../../definitions/guest";
import Center from "../atoms/center";
import LittleFlower from "../atoms/littleFlower";
import Loading from "../atoms/loading";
import Paragraph from "../atoms/paragraph";
import { VSpacer } from "../atoms/spacers";
import Title from "../atoms/title";
import WordDivider from "../atoms/wordDivider";

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
  background: #cc3f4b;
  border: 2px solid white;
  box-shadow: 0px 3.2px 32px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
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

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const GuestIDInput = styled.input`
  background: #ffffff;
  border: 3px solid #85cab4;
  box-sizing: border-box;
  border-radius: 10px 0px 0px 10px;
  width: ${isMobile ? 180 : 218}px;
  height: 50px;

  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.1rem;
  text-align: center;

  padding-left: 12px;

  /* color: rgba(133, 202, 180, 0.75); */
  color: black;
`;

const SearchButton = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
  background: #85cab4;
  border-radius: 0px 10px 10px 0px;
  border: none;
`;

const SearchButtonText = styled.span`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
`;

const GuestName = styled.div`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 29px;
  text-align: center;

  color: #6c176c;
  font-feature-settings: "dlig", "liga", "calt";
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
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

const Error = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-align: center;

  color: #ef959d;
`;

function getNames(guest: Guest) {
  if (guest.numberOfGuests === 1) {
    return guest.firstGuest;
  }
  if (guest.numberOfGuests === 2) {
    return `${guest.firstGuest} e ${guest.secondGuest}`;
  } else {
    return `${guest.firstGuest}, ${guest.secondGuest} e ${guest.thirdGuest}`;
  }
}

type Props = {
  toggleConfirmationModal: () => void;
  showModal: boolean;
};

function ConfirmationModal(props: Props) {
  const [data, setData] = useState(null);
  const [guestId, setGuestId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const getGuest = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`/api/confirmation?id=${guestId}`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setData(null);
      setError("Convidado não encontrado. Verifique novamente o código.");
    }
  };

  const confirm = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(`/api/confirmation`, {
        id: guestId,
      });
      setLoading(false);
      setConfirmed(true);
    } catch (error) {
      setLoading(false);
      setError(
        "Oops! Não foi possível confirmar a sua presença. Tente novamente, ou confirme diretamente com os noivos."
      );
    }
  };

  return (
    <Container showModal={props.showModal}>
      <Frame zoom={props.showModal ? 1 : 0}>
        {!isMobile && (
          <CloseButton onClick={() => props.toggleConfirmationModal()}>
            <CloseButtonText>X</CloseButtonText>
          </CloseButton>
        )}
        {isMobile && <VSpacer multiplier={4}></VSpacer>}
        <Title>
          {confirmed ? "Agradecemos Sua Presença" : "Confirmar Presença"}
        </Title>
        <VSpacer multiplier={3}></VSpacer>
        <Center>
          <LittleFlower></LittleFlower>
        </Center>
        <VSpacer multiplier={3}></VSpacer>
        {confirmed && (
          <>
            <Paragraph color="#6C176C" center>
              Oba! Adoramos saber da sua confirmação. Aguardamos você nesta data
              tão especial!
            </Paragraph>
            <VSpacer multiplier={5}></VSpacer>
            <Center>
              <ActionButton onClick={() => props.toggleConfirmationModal()}>
                <ButtonText>Fechar</ButtonText>
              </ActionButton>
            </Center>
          </>
        )}
        {!confirmed && (
          <Paragraph color="#6C176C" center>
            {isMobile
              ? "Insira o código de convidado assim como está no final do convite"
              : "Para confirmar sua presença insira o código de convidado assim como está no convite"}
          </Paragraph>
        )}
        {!confirmed && (
          <>
            <VSpacer multiplier={2}></VSpacer>
            <Center>
              <SearchBar>
                <GuestIDInput
                  onChange={(e) => setGuestId(e.target.value)}
                  value={guestId}
                ></GuestIDInput>
                <SearchButton onClick={() => getGuest()}>
                  <SearchButtonText>Buscar</SearchButtonText>
                </SearchButton>
              </SearchBar>
            </Center>
            {loading && (
              <>
                <VSpacer multiplier={2.5}></VSpacer>
                <Center>
                  <Loading size={60}></Loading>
                </Center>
              </>
            )}
            {error && (
              <>
                <VSpacer multiplier={2}></VSpacer>
                <Center>
                  <Error>{error}</Error>
                </Center>
              </>
            )}
            {data && !error && !loading && (
              <>
                <VSpacer multiplier={3}></VSpacer>
                <WordDivider>Resultados</WordDivider>
                <VSpacer multiplier={2}></VSpacer>
                <Center>
                  <GuestName>{getNames(data)}</GuestName>
                </Center>
                <VSpacer multiplier={3}></VSpacer>
                <Center>
                  <ActionButton onClick={() => confirm()}>
                    <ButtonText>Confirmar Presença</ButtonText>
                  </ActionButton>
                </Center>
              </>
            )}
          </>
        )}
        {isMobile && (
          <Center>
            <MobileCloseButton onClick={() => props.toggleConfirmationModal()}>
              <CloseButtonText>X</CloseButtonText>
            </MobileCloseButton>
          </Center>
        )}
      </Frame>
    </Container>
  );
}

export default ConfirmationModal;
