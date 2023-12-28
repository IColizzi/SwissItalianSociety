import {
  StyledNavbar,
  StyledLogo,
  StyledPages,
  StyledPageLink,
  StyledName,
  StyledTitle,
} from "./StyledComponents";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <StyledTitle>
          <StyledLogo>
            <img src="pictures/logo_SIS.png" alt="Logo" />
          </StyledLogo>
          <StyledName>Swiss Italian Society</StyledName>
        </StyledTitle>
        <StyledPages>
          <StyledPageLink href="/">Home</StyledPageLink>
          <StyledPageLink href="/eventi">Eventi</StyledPageLink>
          <StyledPageLink href="/risorse">Risorse</StyledPageLink>
          <StyledPageLink href="/team">Team</StyledPageLink>
        </StyledPages>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
