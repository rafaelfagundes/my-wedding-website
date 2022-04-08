import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import ConfirmationModal from "../src/components/modals/confirmation";
import Confirmation from "../src/components/sections/confirmation";
import Countdown from "../src/components/sections/countdown";
import Footer from "../src/components/sections/footer";
import Gifts from "../src/components/sections/gifts";
import Home from "../src/components/sections/home";
import Location from "../src/components/sections/location";

const Main = styled.div``;

const BackgroundBlur = styled.div<{ showConfirmationModal: boolean }>`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(props) => (props.showConfirmationModal ? 99 : -99)};
  overflow: hidden;

  transition: opacity 0.4s ease-in-out;
  opacity: ${(props) => (props.showConfirmationModal ? 1 : 0)};
`;

const MainPage: NextPage = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  return (
    <>
      <Head>
        <title>Elisa e Rafael</title>
        <meta
          name="description"
          content="Website do Casamento da Elisa com o Rafael."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        {!showConfirmationModal && (
          <>
            <Home></Home>
            <Location></Location>
          </>
        )}
        <Confirmation
          toggleConfirmationModal={() =>
            setShowConfirmationModal(!showConfirmationModal)
          }
          showModal={showConfirmationModal}
        ></Confirmation>
        {!showConfirmationModal && (
          <>
            <Countdown></Countdown>
            <Gifts></Gifts>
            <Footer></Footer>
          </>
        )}

        <>
          <BackgroundBlur
            onClick={() => setShowConfirmationModal(!showConfirmationModal)}
            showConfirmationModal={showConfirmationModal}
          ></BackgroundBlur>

          <ConfirmationModal
            toggleConfirmationModal={() =>
              setShowConfirmationModal(!showConfirmationModal)
            }
            showModal={showConfirmationModal}
          ></ConfirmationModal>
        </>
      </Main>
    </>
  );
};

export default MainPage;
