// components/StyledFooter.js
import styled from "styled-components";

const italianGreen = "#009246";
const italianWhite = "#ffffff";
const italianRed = "#ce2b37";
const transparentRed = "rgba(206, 43, 55, 0.4)";
const transparentGreen = "rgba(69, 172, 21, 0.514)";
const transparentWhite = "rgba(236, 240, 235, 0.384)";

// Navbar component

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  padding-left: 8%;
  padding-right: 8%;
  align-items: center;
  color: ${italianGreen};
  background-color: ${italianWhite};
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 50px;
  //border-bottom-right-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  z-index: +1000;
`;

export const StyledLogo = styled.div`
  img {
    width: 60px;
    height: 60px;
  }
`;

export const StyledName = styled.h1`
  color: ${italianGreen};
  text-decoration: none;
  font-weight: bold;
`;

export const StyledTitle = styled.div`
  display: flex;
  gap: 15px;

  justify-content: space-between;
  align-items: center;
`;

export const StyledPageLink = styled.a`
  color: ${italianGreen};
  padding: 5px;
  gap: 10px;
  text-decoration: none;
`;

// index components

export const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledMain = styled.main`
  margin: 0 auto;
  width: 100%;
  border-bottom: 2px solid #fffcfc;
  border-top: 2px solid #ddd;
`;

export const StyledImage = styled.div`
  padding-top: 50px;
  position: sticky;
  align-items: baseline;
  img {
    width: 100%;
    height: auto;
  }
`;

export const StyledPage = styled.div`
  color: black;
  padding-top: 150px;
  margin: 50px;

  justify-content: center;
  gap: 20px;

  h1 {
    color: ${italianGreen};
  }
`;

export const StyledPages = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledIntroSociety = styled.section`
  padding: 15px;

  background-color: ${transparentGreen};
  color: black;
  text-align: center;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    p {
      flex: 1;
      padding: 0 25px;
      position: relative;
    }
    p:first-child {
      border-right: 2px solid ${italianGreen};
    }
  }
  @media (max-width: 768px) {
    /* Adjust styling for smaller screens */
    flex-direction: column;
    align-items: center;
    p {
      flex: 1;
      padding: 0px 10px;
      position: relative;
    }
    p:first-child {
      padding-bottom: 30px;
      border-bottom: 2px solid ${italianGreen};
      border-right: none;
    }
  }
`;

export const StyledIntro = styled.section`
  padding: 20px;
  color: black;

  font-style: italic;
  font-family: "Mali";
  text-align: center;
  background-color: ${transparentWhite};
`;

export const StyledSection = styled.section`
  color: black;
  text-align: center;
  padding: 15px;
  margin-top: 10px;
`;

export const StyledIcon = styled.div`
  color: ${italianGreen};
  padding: 5px;
  width: 5px;
  height: auto;
`;

// Footer component
export const StyledFooter = styled.footer`
  padding: 10px;
  margin-left: 30px;
  margin-right: 30px;
  border-width: 40%;
  font-size: 0.8rem;
  border-top: 2px solid ${transparentGreen};
  text-align: center;
  color: ${italianGreen};
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ContactSection = styled.section`
  padding: 15px;
  background-color: ${transparentGreen};
  color: black;
  text-align: center;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 0.8rem;

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

  button:hover {
    background-color: #007f33; /* Darker green on hover */
  }
`;

export const TextBox = styled.div`
  margin: 0px 100px 0px 100px;
  background-color: ${transparentGreen};
  padding: 10px;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
  p {
    font-size: 1rem;
    margin-top: 5px;
    color: black;
  }
`;
