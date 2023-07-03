import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Nav>
      <Logo>
        <img src="./images/LogoNav.svg" alt="" />
      </Logo>
      <NavIcon onClick={toggleMenu} className={showMenu ? "active" : ""}>
        <div></div>
        <div></div>
        <div></div>
      </NavIcon>
      <NavMenu showMenu={showMenu} className={showMenu ? "active" : ""}>
        <NavList>
          <NavItem>
            <NavLink onClick={toggleMenu} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggleMenu} to="/team">
              Team
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggleMenu} to="/events">
              Events
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggleMenu} to="/inventory">
              Inventory
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggleMenu} to="/projects">
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggleMenu} to="/contacts">
              Contacts
            </NavLink>
          </NavItem>
        </NavList>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;
  padding-left: 5rem;
`;

const NavIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 1200px) {
    position: fixed;
    top: 4rem;
    right: 2rem;
    display: flex;
    z-index: 15;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin-bottom: 5px;
    transition: transform 0.3s, background-color 0.3s;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &.active {
    div:first-child {
      transform: translateY(8px) rotate(45deg);
    }

    div:nth-child(2) {
      opacity: 0;
    }

    div:last-child {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;

const NavMenu = styled.div`
  @media (max-width: 1200px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 1rem;
    transform: ${({ showMenu }) =>
      showMenu ? "translateY(0%)" : "translateY(-100%)"};
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
`;

const NavList = styled.ul`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8rem;
  }
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 20px;
    display: flex;
    align-items: center;

    transition: color 0.3s;
    padding: 2vw;

    &:hover,
    &:active {
      // color: ${({ theme }) => theme.colors.nav_color};
      color: #6c10c6;
      scale: 1.2;
    }
    color: #484848;
  }
`;
