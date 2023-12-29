import React from "react";
import styled from "styled-components";
import { StyledPage } from "../components/StyledComponents";

const Team = () => {
  const teamMembers = [
    {
      name: "Giusy Spacone",
      role: "Presidente",
      imageUrl: "/pictures/members/giusy.jpeg",
    },
    {
      name: "Pietro Palopoli",
      role: "Vicepresidente",
      imageUrl: "/pictures/members/pietro.jpeg",
    },
    {
      name: "Lorenzo Benincasa",
      role: "Tesoriere",
      imageUrl: "/pictures/members/Lorenzo.jpeg",
    },
    {
      name: "Lavinia Moretti",
      role: "Segretario",
      imageUrl: "/pictures/members/lavinia.jpeg",
    },
  ];

  const teamMembersEventi = [
    {
      name: "Matteo Leonforte",
      imageUrl: "/pictures/members/matteo.jpeg",
    },
    {
      name: "Sebastiano Oliani",
      imageUrl: "/pictures/members/sebastiano.jpg",
    },
    {
      name: "Andrea Nappi",
      imageUrl: "/pictures/members/Andrea.jpeg",
    },
  ];

  const teamMembersComunicazione = [
    {
      name: "Alice Bondi",
      imageUrl: "/pictures/members/Alice.jpg",
    },
    {
      name: "Isabella Colizzi",
      imageUrl: "/pictures/members/isabella.jpg",
    },
  ];

  return (
    <StyledPage>
      <h1>Il Team</h1>
      <h2>Consiglio Direttivo</h2>
      <TeamContainer>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </TeamContainer>
      <h2>Responsabili Comunicazione</h2>
      <TeamContainer>
        {teamMembersComunicazione.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </TeamContainer>
      <h2>Responsabili Eventi</h2>
      <TeamContainer>
        {teamMembersEventi.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </TeamContainer>
    </StyledPage>
  );
};

export default Team;

const TeamMember = ({ name, role, imageUrl }) => {
  return (
    <MemberContainer>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </MemberContainer>
  );
};

const MemberContainer = styled.div`
  text-align: center;

  margin-bottom: 20px;
  img {
    border-radius: 50%;
    max-width: 100px;
    height: auto;
  }
  p {
    font-size: 0.8rem;
  }
`;

const TeamContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
