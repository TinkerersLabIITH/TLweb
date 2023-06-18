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
      <Logo><img src="./images/LogoNav.svg" alt="" /></Logo>
      <NavMenu className={showMenu ? "active" : ""}>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/team">Team</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/events">Events</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/inventory">Inventory</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contacts">Contacts</NavLink>
          </NavItem>
        </NavList>
      </NavMenu>
      <NavIcon onClick={toggleMenu} className={showMenu ? "active" : ""}>
        <div></div>
        <div></div>
        <div></div>
      </NavIcon>
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
  padding-left:5rem;
`;

const NavMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  &.active {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    position: absolute;
    top: 100%;
    right: 1rem;
    background-color: #fff;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 20px;
    color: #333;
    transition: color 0.3s;

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.nav_color};
    }
  }
`;

const NavIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
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
