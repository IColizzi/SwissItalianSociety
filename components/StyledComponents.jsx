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
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  color: ${italianGreen};
  background-color: ${italianWhite};
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 50px;
  //border-bottom-right-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  z-index: +1000;
  @media (max-width: 768px) {
    /* Adjust styling for smaller screens */
    flex-direction: column;
    align-items: center;
  }
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
  gap: 20px;
  font-size: 18px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPageLink = styled.a`
  color: ${italianGreen};
  padding: 10px;
  text-decoration: none;
  font-size: 16px;
  :hover ;
`;

// index components

export const StyledContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    ${transparentGreen},
    ${italianWhite} 40%,
    ${transparentRed}
  );
  display: flex;
  flex-direction: column;
`;

export const StyledMain = styled.main`
  width: 100%;
  margin: 0 auto;
  border-bottom: 2px solid #fffcfc;
  border-top: 2px solid #ddd;
`;

export const StyledImage = styled.div`
  padding-top: 50px;
  img {
    width: 100%;
    height: auto;
  }
`;

export const StyledPages = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledIntroSociety = styled.section`
  padding: 15px;
  font-size: 18px;
  background-color: ${transparentGreen};
  color: black;
  text-align: center;
  display: flex;
  align-items: center;
  p {
    flex: 1;
    padding: 0 25px;
    position: relative;
  }
  p:first-child {
    border-right: 2px solid ${italianGreen};
  }
`;

export const StyledIntro = styled.section`
  padding: 20px;
  color: black;
  font-size: 17px;
  //font-weight: bold;
  font-style: italic;
  font-family: "Mali";
  text-align: end;
  background-color: ${transparentWhite};
`;

export const StyledSection = styled.section`
  color: black;
  text-align: center;
  padding: 15px;
  font-size: 17px;
`;

// Footer component
export const StyledFooter = styled.footer`
  padding: 20px;
  padding-left: 10%;
  padding-right: 10%;
  text-align: center;
  color: ${italianRed};
  display: flex;
  justify-content: space-between;
`;

export const StyledAdvertisement = styled.section`
  margin-bottom: 0px;
  padding: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 50px;

  color: black;
  border: 4px solid ${italianGreen};
  box-shadow: 2vb;
  text-align: justify;
`;
