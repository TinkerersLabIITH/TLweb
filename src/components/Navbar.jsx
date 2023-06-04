import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Navbar = () => {
    return (
        <Nav>
            <div className="menuIcon">
                <ul className="navbar-list">
                    <li>
                        <NavLink classname="navbar-links" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink classname="navbar-links" to="/team">Team</NavLink>
                    </li>
                    <li>
                        <NavLink classname="navbar-links" to="/events">Events</NavLink>
                    </li>
                    <li>
                        <NavLink classname="navbar-links" to="/inventory">Inventory</NavLink>
                    </li>
                    <li>
                        <NavLink classname="navbar-links" to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink classname="navbar-links" to="/contacts">Contacts</NavLink>
                    </li>
                </ul>
            </div>
        </Nav>
    )
}

export default Navbar;

const Nav = styled.nav`
.navbar-list{
    display: flex;
    gap: 5rem;
    
    li{
        list-style: none;
        a{
            text-decoration: none;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 20px;
            display: flex;
            align-items: center;
            &:hover,
            &:active{
                color: ${({ theme }) => theme.colors.nav_color};
            }
        }

    }
    
}
`