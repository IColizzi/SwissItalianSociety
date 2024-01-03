import {
  StyledNavbar,
  StyledLogo,
  StyledPages,
  StyledName,
  StyledTitle,
  italianGreen,
} from "./StyledComponents";
import styled from "styled-components";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1500);
      setMenuOpen(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Use useRef to create a reference to the menu container
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the menu if the click is outside the menu container
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Attach the event listener to the entire document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove the event listener when the component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <StyledNavbar>
        <Link href="/">
          <StyledTitle>
            <StyledLogo>
              <img src="pictures/logo_SIS.png" alt="Logo" />
            </StyledLogo>
            <StyledName>Swiss Italian Society</StyledName>
          </StyledTitle>
        </Link>
        {isSmallScreen ? (
          <Bars3Icon
            style={{ height: "1.5rem", width: "1.5rem" }}
            onClick={toggleMenu}
          />
        ) : (
          <StyledPages>
            <StyledPageLink href="/eventi">Eventi</StyledPageLink>
            <StyledPageLink href="/risorse">Risorse</StyledPageLink>
            <StyledPageLink href="/studio">Università</StyledPageLink>
            <StyledPageLink href="/team">Team</StyledPageLink>
            <StyledPageLink href="/contacts">Contatti</StyledPageLink>
          </StyledPages>
        )}
        {isMenuOpen && isSmallScreen && <MobileMenu />}
      </StyledNavbar>
    </>
  );
};

export default Navbar;

const MobileMenu = ({ menuRef }) => {
  return (
    <StyledMobileMenu ref={menuRef}>
      <StyledPageLink href="/eventi">Eventi</StyledPageLink>
      <StyledPageLink href="/risorse">Risorse</StyledPageLink>
      <StyledPageLink href="/studio">Università</StyledPageLink>
      <StyledPageLink href="/team">Team</StyledPageLink>
      <StyledPageLink href="/contacts">Contatti</StyledPageLink>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.div`
  position: absolute;
  top: 100px; // Adjust the top position as needed
  right: 0;
  width: 20%;
  background-color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 10px;

  a {
    color: black;
    text-decoration: none;
    font-weight: bold;
    display: block;
    padding: 8px;
  }
`;

const StyledPageLink = styled.a`
  color: ${italianGreen};
  padding: 5px;
  gap: 10px;
  text-decoration: none;
`;
