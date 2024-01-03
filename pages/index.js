// pages/index.js
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
  StyledSection2,
  StyledIntro,
  StyledIntroSociety,
  StyledAdvertisement,
  StyledImage,
  StyledIcon,
  transparentGreen,
  ContactSection,
  TextBox,
} from "../components/StyledComponents";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  HeartIcon,
  RocketLaunchIcon,
  ArrowTrendingUpIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const italianGreen = "#009246";
const italianWhite = "#ffffff";
const italianRed = "#ce2b37";

const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [expandedSections, setExpandedSections] = useState({
    supportoInIngresso: false,
    supportoMondoAccademico: false,
    eventiENetworking: false,
    scambioCulturale: false,
  });

  const handleSectionClick = (section) => {
    setExpandedSections((prev) => {
      const newExpandedSections = { ...prev };

      // If the clicked section is already expanded, collapse it
      if (newExpandedSections[section]) {
        newExpandedSections[section] = false;
      } else {
        // If the clicked section is not expanded, collapse any other expanded section
        Object.keys(newExpandedSections).forEach((key) => {
          newExpandedSections[key] = key === section;
        });
      }

      return newExpandedSections;
    });
  };

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

      <StyledBoxes>
        <StyledSectionBox>
          <div className="bubble">
            <RocketLaunchIcon style={{ height: "5rem", width: "5rem" }} />
          </div>
          <StyledText>
            <h2>La nostra Missione</h2>

            <p>
              Il nostro obiettivo è quello di creare una comunità di giovani
              studenti italiani già iscritti o desiderosi di iniziare il proprio
              percorso universitario a Zurigo (ETH e UZH), fornendo il supporto
              necessario per faciltare il trasferimento e l’integrazione.
            </p>
          </StyledText>
        </StyledSectionBox>

        <StyledSectionBox>
          <div className="bubble">
            <HeartIcon style={{ height: "5rem", width: "5rem" }} />
          </div>
          <StyledText>
            <h2>La nostra Visione</h2>
            <p>
              La nostra visione è quella di creare un flusso bidirezionale di
              idee ed opportunità che arricchisca sia la Svizzera che l'Italia,
              con lo scopo di portare alla luce i sogni e le esigenze di una
              generazione in costante moto ma fortemente legata al proprio
              paese.
            </p>{" "}
          </StyledText>
        </StyledSectionBox>
      </StyledBoxes>

      <StyledSection>
        <h2>Cosa Facciamo?</h2>
        <IconWithTextSection>
          <IconWithText
            onClick={() => handleSectionClick("supportoInIngresso")}
            style={{
              color: expandedSections.supportoInIngresso ? "#009246" : "",
            }}
          >
            <ArrowTrendingUpIcon style={{ height: "5rem", width: "5rem" }} />
            <h3>Supporto in Ingresso</h3>
            {expandedSections.supportoInIngresso && isSmallScreen && (
              <TextBox>
                <p>
                  Se stai per iniziare il tuo viaggio in Svizzera, ti guidiamo
                  passo dopo passo attraverso gli step essenziali per accedere
                  in un'università del Canton Zurigo, immatricolarti e iniziare
                  il tuo percorso accademico.{" "}
                </p>
              </TextBox>
            )}
          </IconWithText>
          <IconWithText
            onClick={() => handleSectionClick("supportoMondoAccademico")}
            style={{
              color: expandedSections.supportoMondoAccademico ? "#009246" : "",
            }}
          >
            <AcademicCapIcon style={{ height: "5rem", width: "5rem" }} />
            <h3>Supporto per il mondo Accademico</h3>
            {expandedSections.supportoMondoAccademico && isSmallScreen && (
              <TextBox>
                <p>
                  Il nostro scopo è quello di creare una piattaforma per
                  raccogliere informazioni, materiale e strumenti necessari per
                  massimizzare la propria esperienza accademica.
                </p>
              </TextBox>
            )}
          </IconWithText>
          <IconWithText
            onClick={() => handleSectionClick("eventiENetworking")}
            style={{
              color: expandedSections.eventiENetworking ? "#009246" : "",
            }}
          >
            <UserGroupIcon style={{ height: "5rem", width: "5rem" }} />
            <h3>Eventi e networking</h3>
            {expandedSections.eventiENetworking && isSmallScreen && (
              <TextBox>
                <p>
                  Partecipa ai nostri eventi di networking, incontri con esperti
                  e feste semestrali, dove potrai incontrare altri italiani con
                  cui condividere esperienze e ampliare la tua rete
                  professionale e accademica.
                </p>
              </TextBox>
            )}
          </IconWithText>
          <IconWithText
            onClick={() => handleSectionClick("scambioCulturale")}
            style={{
              color: expandedSections.scambioCulturale ? "#009246" : "",
            }}
          >
            <ChatBubbleLeftRightIcon
              style={{ height: "5rem", width: "5rem" }}
            />
            <h3>Scambio Culturale</h3>
            {expandedSections.scambioCulturale && isSmallScreen && (
              <TextBox>
                <p>
                  {" "}
                  Italiani, ma cittadini del mondo. Siamo convinti che parte
                  fondamentale di un’esperienza all’estero si basi sulla
                  scoperta di nuove culture. Organizziamo eventi in
                  collaborazione con altre associazioni studentesche in giro per
                  il mondo per favorire la scoperta di nuove mete in ogni
                  continente.
                </p>
              </TextBox>
            )}
          </IconWithText>
        </IconWithTextSection>

        {expandedSections.supportoInIngresso && !isSmallScreen && (
          <TextBox>
            <p>
              {" "}
              Se stai per iniziare il tuo viaggio in Svizzera, ti guidiamo passo
              dopo passo attraverso gli step essenziali per accedere in
              un'università del Canton Zurigo, immatricolarti e iniziare il tuo
              percorso accademico.{" "}
            </p>
          </TextBox>
        )}
        {expandedSections.supportoMondoAccademico && !isSmallScreen && (
          <TextBox>
            <p>
              Il nostro scopo è quello di creare una piattaforma per raccogliere
              informazioni, materiale e strumenti necessari per massimizzare la
              propria esperienza accademica.
            </p>
          </TextBox>
        )}
        {expandedSections.eventiENetworking && !isSmallScreen && (
          <TextBox>
            <p>
              Partecipa ai nostri eventi di networking, incontri con esperti e
              feste semestrali, dove potrai incontrare altri italiani con cui
              condividere esperienze e ampliare la tua rete professionale e
              accademica.
            </p>
          </TextBox>
        )}
        {expandedSections.scambioCulturale && !isSmallScreen && (
          <TextBox>
            <p>
              Italiani, ma cittadini del mondo. Siamo convinti che parte
              fondamentale di un’esperienza all’estero si basi sulla scoperta di
              nuove culture. Organizziamo eventi in collaborazione con altre
              associazioni studentesche in giro per il mondo per favorire la
              scoperta di nuove mete in ogni continente.
            </p>
          </TextBox>
        )}
      </StyledSection>

      <StyledSection2>
        <h2>Siamo Membri di:</h2>
        <img
          src="pictures/unitedItalianSocSmall.jpg"
          alt="United Italian Society"
        />
      </StyledSection2>

      <ContactSection>
        <p>
          Siamo una giovane realtà e abbiamo bisogno di ampliare il nostro team!
          Hai idee, proposte o progetti che ti piacerebbe portare avanti?
        </p>
        <Link href="/contacts" passHref>
          <button>Contattaci</button>
        </Link>
      </ContactSection>
    </>
  );
};

export default Home;

const IconWithTextSection = styled.section`
  display: flex;
  color: black;
  justify-content: center;
  text-align: center;
  padding: 30px;
  gap: 30px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const IconWithText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  h3 {
    font-size: 1.2rem;
    margin-top: 10px;
    color: black;
  }
`;

const StyledText = styled.div`
  text-align: center;
  @media (max-width: 900px) {
    max-width: 80%;
  }
  padding: 30px;
`;

const StyledBoxes = styled.div`
  display: flex;
  text-align: center;
  padding: 40px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const StyledSectionBox = styled.section`
  display: flex;
  margin: 30px;
  flex-direction: column;
  border: 2px solid ${italianGreen};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);

  padding: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 50px;

  align-items: center;

  color: black;
  //margin-left: 20%;
  .bubble {
    margin-top: 15px;
    width: auto;
    height: auto;
    background-color: ${italianGreen};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);

    svg {
      height: 40px;
      width: 40px;
    }
  }
`;
