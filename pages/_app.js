import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar"; // Import your Navbar component
import Footer from "../components/Footer"; // Import your Footer component
import { StyledContainer, StyledMain } from "../components/StyledComponents";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="pictures/logo_SIS.png" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
        />
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

export default MyApp;
