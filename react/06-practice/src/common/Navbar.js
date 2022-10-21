import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import mq from '../MediaQuery';

const NavbarContainer = styled.nav`
    width: 100%;
    padding: 5px 15px;
    box-sizing: border-box;
    position: fixed;
    z-index: 9999;
    background-color: #fff;
    box-shadow: 0.5px 0.5px 5px gray;
    top: 0;

    a {
        color: black;
        text-decoration: none;
        letter-spacing: 0.2em;
        float: right;
        font-size: 14px;
        margin-left: 30px;
        padding: 10px 15px;
        box-sizing: border-box;
        &:hover {
            background-color: #ccc;
        }
        ${mq.maxWidth('sm')`
            display: none;
            &.left {
                margin-left: auto;
                display: inline;
            }
        `}

        &.left {
            float: left;
            color:black;
            letter-spacing: 0.2em;
            text-decoration: none;
            font-size: 14px;
            font-weight: 700;
            margin-left: 0;
        }
    }
`;
const Navbar = () => {
  return (
    <NavbarContainer>
        <div>
            <NavLink to="/"  className="left">Gourmet au Catering</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    </NavbarContainer>
  );
};

export default Navbar;