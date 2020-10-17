import React, { useEffect, useState } from "react";
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

import { Nav, NavContainer, NavLogo, NavMenu, NavItem, NavLinks, MobileIcon, NavButton, NavButtonLink } from "./NavbarElements";

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        }
        else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavContainer>
                        <NavLogo to={"/"} onClick={toggleHome}> GetData </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks smooth spy exact offset={-80} to="about"> About </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks smooth spy exact offset={-80} to="discover"> Discover </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks smooth spy exact offset={-80} to="services"> Services </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks smooth spy exact offset={-80} to="signup"> Sign Up </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavButton>
                            <NavButtonLink to={"/sign-in"}> Sign In </NavButtonLink>
                        </NavButton>
                    </NavContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;