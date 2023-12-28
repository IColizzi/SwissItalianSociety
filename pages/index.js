// pages/index.js
import React from "react";
import {
  StyledMain,
  StyledFooter,
  StyledNavbar,
  StyledLogo,
  StyledPages,
  StyledPageLink,
  StyledName,
  StyledTitle,
  StyledSection,
  StyledIntro,
  StyledIntroSociety,
  StyledAdvertisement,
  StyledImage,
} from "../components/StyledComponents";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const italianGreen = "#009246";
const italianWhite = "#ffffff";
const italianRed = "#ce2b37";

const Home = () => {
  return (
    <>
      <StyledImage>
        <img src="pictures/zurich.jpg" alt="Zurich" />
        <StyledIntro>
          <p>
            Sei un giovane italiano che studia o vive a Zurigo? Stai ancora
            studiando in Italia ma sei interessato a scoprire le opportunità che
            la città può offrire? In entrambi i casi, sei nel posto giusto!
          </p>
        </StyledIntro>
      </StyledImage>

      <StyledIntroSociety>
        <p>
          Swiss Italian Society è l'associazione che collega giovani italiani
          che vivono e studiano a Zurigo.{" "}
        </p>

        <p>
          Siamo qui per offrirti supporto, risorse e opportunità uniche di
          networking.
        </p>
      </StyledIntroSociety>

      <StyledSection>
        <h2>La nostra Missione</h2>
        <StyledIntroSociety>
          <FontAwesomeIcon icon={faRocket} />
          <p>
            Intraprendere un percorso in un’altra nazione richiede un salto nel
            vuoto. L’obiettivo di Swiss Italian Society - Zurigo è quello di
            creare una community tra giovani italiani iscritti o desiderosi di
            intraprendere il proprio percorso universitario nel Canton di
            Zurigo, fornendo il supporto necessario per faciltare il
            trasferimento e l’integrazione.{" "}
          </p>
        </StyledIntroSociety>
      </StyledSection>
      <StyledSection>
        <h2>La nostra Visione</h2>
        <p>
          La nostra visione a lungo termine è quella di creare un ponte tra
          Italia e Svizzera. L’intraprendenza, la voglia di conoscenza, di
          scoperta e migliori condizioni che ci hanno spinti a lasciare il
          nostro paese si affiancano ad un profondo legame con le nostre origini
          e la nostra cultura. In un mondo così interconnesso rimanere al passo
          significa conoscere realtà diverse alla nostra. Il nostro obiettivo è
          creare un flusso bidirezionale di idee ed opportunità che arricchisca
          sia la nazione ospitante che il nostro paese. Il nostro scopo è quello
          di promuovere un dialogo con istituzioni ed esponenti del settore
          industriale, con lo scopo di portare alla luce i sogni e le esigenze
          di una generazione in costante moto ma, in fondo, fortemente legata ai
          valori e all’identità del paese di origine.{" "}
        </p>{" "}
        <p>
          Per raggiungere il nostro scopo, siamo membri di United Italians
          Society. Per scoprire di più, visita il sito:
          https://uniteditaliansocieties.com/
        </p>
      </StyledSection>
      <StyledSection>
        <StyledAdvertisement>
          <h2>Unisciti al nostro team!</h2>
          <p>
            Siamo una giovane realtà e abbiamo bisogno di ampliare il nostro
            team! Hai idee, proposte o progetti che ti piacerebbe portare
            avanti?
          </p>
        </StyledAdvertisement>
      </StyledSection>
    </>
  );
};

export default Home;
