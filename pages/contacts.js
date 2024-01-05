import Link from "next/link";

import styled from "styled-components";
import { StyledPage } from "../components/StyledComponents";
import {
  ChatBubbleLeftIcon,
  CameraIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

const Contacts = () => {
  return (
    <StyledPage>
      <h1>Contatti</h1>
      <p>
        Seguici su Instagram e unisciti alla nostra community su WhatsApp per
        rimanere sempre aggiornato!
      </p>

      <IconTextList>
        {/* Instagram */}
        <Element>
          <a
            href="https://www.instagram.com/swissitaliansociety_zurigo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CameraIcon
              style={{ margin: "10px", height: "2rem", width: "2rem" }}
            />
            Instagram
          </a>
        </Element>
        {/* WhatsApp */}
        <Element>
          <a
            href="https://chat.whatsapp.com/KhqcLaLd7AdIZ6bxo7jekv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ChatBubbleLeftIcon
              style={{ margin: "10px", height: "2rem", width: "2rem" }}
            />
            WhatsApp
          </a>
        </Element>
      </IconTextList>

      <p>
        Se hai domande e/o proposte o vorresti semplicemente darci una mano
        compila il sequente Contact Form:
      </p>
      <IconTextList>
        <Element>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeA4GfjXip_SVGfRmDizbJUREr9N9VlXjbiShiy0AMxALwOPQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListBulletIcon
              style={{ margin: "10px", height: "2rem", width: "2rem" }}
            />
            Contact Form
          </Link>
        </Element>
      </IconTextList>
    </StyledPage>
  );
};

export default Contacts;

const IconTextList = styled.section`
  display: flex;
  flex-direction: column;
  color: black;

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Element = styled.div`
  display: flex;
  padding: 10px;
  color: black;
`;
