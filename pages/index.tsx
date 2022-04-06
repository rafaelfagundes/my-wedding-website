import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Confirmation from "../src/components/sections/confirmation";
import Countdown from "../src/components/sections/countdown";
import Footer from "../src/components/sections/footer";
import Gifts from "../src/components/sections/gifts";
import Home from "../src/components/sections/home";
import Location from "../src/components/sections/location";

const Main = styled.div``;

const MainPage: NextPage = () => {
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
        <Home></Home>
        <Location></Location>
        <Confirmation></Confirmation>
        <Countdown></Countdown>
        <Gifts></Gifts>
        <Footer></Footer>
      </Main>
    </>
  );
};

export default MainPage;
