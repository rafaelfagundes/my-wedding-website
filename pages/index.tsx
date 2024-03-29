import type { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useSWR, { mutate } from "swr";
import { server } from "../config";
import ConfirmationModal from "../src/components/modals/confirmation";
import GiftsModal from "../src/components/modals/gifts";
import Confirmation from "../src/components/sections/confirmation";
import Countdown from "../src/components/sections/countdown";
import Footer from "../src/components/sections/footer";
import Gifts from "../src/components/sections/gifts";
import Home from "../src/components/sections/home";
import Location from "../src/components/sections/location";
import Product from "../src/definitions/product";
import { Text as TextProps } from "../src/definitions/text";

const fetcher = (arg: any, ...args: any[]) =>
  fetch(arg, ...args).then((res) => res.json());

const Main = styled.div``;

const BackgroundBlur = styled.div<{
  showModal: boolean;
  height: number;
  bringToFront: boolean;
}>`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(80px);
  width: 100vw;
  height: ${(props) => props.height}px;
  transition: opacity 0.4s ease-in-out;
  opacity: ${(props) => (props.showModal ? 1 : 0)};
  overflow: hidden;
  position: absolute;
  z-index: ${(props) => (props.bringToFront ? 98 : -100)};
`;

type ModalContainerProps = {
  currentPosition: number;
  showModal: boolean;
};

/*
  This component declaration is to avoid creating a new component
  each time the user scrolls the page. The property or properties
  that changes a lot should be placed inside 'style' as shown below. 
*/
const ModalContainer = styled.div.attrs(
  ({ currentPosition, showModal }: ModalContainerProps) => ({
    style: {
      top: currentPosition,
      zIndex: showModal ? 99 : -99,
    },
  })
)<ModalContainerProps>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  overflow: hidden;
  transition: position 1s ease-in-out;
`;

type Props = {
  text: TextProps;
};

const MainPage = (props: Props) => {
  useEffect(() => {
    mutate("/api/text", props.text, true);
  }, [props.text]);

  const router = useRouter();

  const { data: text } = useSWR("/api/text", fetcher, {
    revalidateOnFocus: true,
    revalidateIfStale: true,
    revalidateOnMount: true,
    revalidateOnReconnect: true,
    refreshInterval: 10000,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    errorRetryCount: 10,
    shouldRetryOnError: true,
  });

  const [showModal, setShowModal] = useState(false);
  const [bringToFront, setBringToFront] = useState(false);
  const [height, setHeight] = useState(2000);
  const [currentPosition, setCurrentPosition] = useState(0);

  const [guestId, setGuestID] = useState<string>();

  // Show countdown
  const [showCountdown, setShowCountdown] = useState(false);

  useEffect(() => {
    /* Why this?
       Because Next.js is rendering the countdown in the server
       and when it is rendered in the client, the countdown values
       are different, leading to errors on hydration.
    */
    setTimeout(() => {
      if (!showCountdown) {
        setShowCountdown(true);
      }
    }, 500);
  });

  // Confirmation Modal
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  // Gifts Modal
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("pix");
  const [product, setProduct] = useState<Product>();

  const toogleConfirmationModal = () => {
    setCurrentPosition(document.documentElement.scrollTop);
    setShowConfirmationModal(!showConfirmationModal);
  };

  const toogleGiftModal = (paymentMethod: string) => {
    setCurrentPosition(document.documentElement.scrollTop);
    setPaymentMethod(paymentMethod);
    setShowGiftModal(!showGiftModal);
  };

  useEffect(() => {
    if (router?.query?.guestId && !guestId) {
      setGuestID(String(router.query.guestId));
    }
  }, [router, guestId]);

  useEffect(() => {
    if (showConfirmationModal || showGiftModal) {
      setShowModal(true);
      setHeight(document.documentElement.scrollHeight);
      setBringToFront(true);
    } else {
      setShowModal(false);
      setTimeout(() => {
        /* The background blur should hide after 400ms
           because it have to wait until the opacity animation ends.
           Otherwise, the animation is not shown to user as it
           occurs behind the main page.
        */
        setBringToFront(false);
      }, 400);
    }
  }, [showConfirmationModal, showGiftModal]);

  useEffect(() => {
    window.onscroll = () => {
      if (showModal) {
        setCurrentPosition(document.documentElement.scrollTop);
      }
    };

    return () => {
      window.onscroll = null;
    };
  });
  if (text) {
    return (
      <>
        <Head>
          <title>{text.hero}</title>
          <meta
            name="description"
            content="Website do Casamento da Elisa com o Rafael."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Main>
          <BackgroundBlur
            showModal={showModal}
            height={height}
            bringToFront={bringToFront}
          ></BackgroundBlur>
          <Home text={text}></Home>
          <Location text={text}></Location>
          <Confirmation
            toggleConfirmationModal={toogleConfirmationModal}
            showModal={showConfirmationModal}
            text={text}
          ></Confirmation>
          <Countdown showCountdown={showCountdown}></Countdown>
          <Gifts
            toggleGiftModal={toogleGiftModal}
            showModal={showGiftModal}
            setProduct={setProduct}
            text={text}
          ></Gifts>

          <Footer text={text}></Footer>
          <ModalContainer
            currentPosition={currentPosition}
            showModal={showModal}
          >
            <ConfirmationModal
              toggleConfirmationModal={toogleConfirmationModal}
              showModal={showConfirmationModal}
              guestId={guestId}
            ></ConfirmationModal>
            <GiftsModal
              toggleGiftModal={toogleGiftModal}
              showModal={showGiftModal}
              product={product}
              paymentMethod={paymentMethod}
            ></GiftsModal>
          </ModalContainer>
        </Main>
      </>
    );
  } else {
    return <></>;
  }
};

export default MainPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  let text = null;

  try {
    const url = `${server}/api/text`;
    const response = await fetch(url);
    text = await response.json();
  } catch (error) {
    console.log("error", error);
  }

  return {
    props: {
      text,
    },
    revalidate: 10,
  };
}
