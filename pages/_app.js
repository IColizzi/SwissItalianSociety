import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar"; // Import your Navbar component
import Footer from "../components/Footer"; // Import your Footer component
import {
  StyledContainer,
  StyledMain,
  StyledPage,
} from "../components/StyledComponents";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="pictures/logo_SIS.png" type="image/x-icon" />
      </Head>
      <StyledContainer>
        <Navbar />
        <StyledMain>
          <StyledPage>
            <Component {...pageProps} />
          </StyledPage>
        </StyledMain>
        <Footer />
      </StyledContainer>
    </>
  );
}

export default MyApp;
