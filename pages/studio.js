import React from "react";
import { transparentGreen, italianGreen } from "../components/StyledComponents";
import styled from "styled-components";
import Post from "../components/Post";
import { uni } from "../components/risorseData";
import Link from "next/link";

const Studio = () => {
  return (
    <>
      <h1>Studiare a Zurigo</h1>
      <h2>Informazioni specifiche sulla tua università</h2>
      <PostsPage>
        {uni.map((uni, index) => (
          <Post key={index} {...uni} />
        ))}
      </PostsPage>

      <h2>Materiale Didattico</h2>
      <p>
        Hai dispense, appunti, repositories che vorresti condividere con altri
        studenti? Sei in cerca di informazioni specifiche su un corso?{" "}
        <Link href="/contacts" passHref>
          Contattaci!
        </Link>
      </p>

      <MentorSection>
        <h2>Buddy system</h2>
        <p>
          Sei iscritto da tempo a ETH o UZH e ti piacerebbe diventare mentor per
          nuovi studenti? Sei un nuovo studente e cerchi un mentor che ti dia
          una mano?
        </p>
        <div>
          <Link href="/" passHref>
            <button>Cerca Mentor</button>
          </Link>
          <Link href="/" passHref>
            <button>Diventa Mentor</button>
          </Link>
        </div>
      </MentorSection>
      <h3>Hai bisogno di aiuto (giuridico e non solo)?</h3>
      <p1>
        Qui trovi tutto cio’ di cui hai bisgno, dal Psychological Counselling al
        Student Helpdesk per problemi scolastici e non:
        (https://help.vseth.ethz.ch/) se hai bisgno di aiuto legale, ci sono
        free online consulatation fatte dagli studenti di legge dell&apos;usz:
        (https://en.vsuzh.ch/rechtsberatung)
      </p1>
    </>
  );
};

export default Studio;

const PostsPage = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const MentorSection = styled.section`
  padding: 20px;
  background-color: ${transparentGreen};
  color: black;
  text-align: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 50px;
  font-size: 1rem;
  border-radius: 10px;

  button {
    background-color: ${italianGreen};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    font-size: 1.2rem;
    font-family: "Mali";
  }
  div {
    display: flex;
    gap: -5px;
    justify-content: space-around;
  }

  button:hover {
    background-color: #007f33; /* Darker green on hover */
  }
`;
