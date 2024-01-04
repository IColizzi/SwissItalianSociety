import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import { StyledContainer, StyledMain } from "../../components/StyledComponents";

function RisorseLayout({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/pictures/logo_SIS.png" type="image/x-icon" />
      </Head>
      <StyledContainer>
        <Navbar />
        <StyledMain>
          <Component {...pageProps} />
        </StyledMain>
        <Footer />
      </StyledContainer>
    </>
  );
}

export default RisorseLayout;
