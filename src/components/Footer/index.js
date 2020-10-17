import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa/index";

import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrapper,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrapper,
    WebsiteRights
} from "./FooterElements";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to={"/about"}>How It Works</FooterLink>
                            <FooterLink to={"/about"}>Testimonials</FooterLink>
                            <FooterLink to={"/about"}>Careers</FooterLink>
                            <FooterLink to={"/about"}>Investors</FooterLink>
                            <FooterLink to={"/about"}>Terms and Conditions</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to={"/about"}>How It Works</FooterLink>
                            <FooterLink to={"/about"}>Testimonials</FooterLink>
                            <FooterLink to={"/about"}>Careers</FooterLink>
                            <FooterLink to={"/about"}>Investors</FooterLink>
                            <FooterLink to={"/about"}>Terms and Conditions</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to={"/about"}>How It Works</FooterLink>
                            <FooterLink to={"/about"}>Testimonials</FooterLink>
                            <FooterLink to={"/about"}>Careers</FooterLink>
                            <FooterLink to={"/about"}>Investors</FooterLink>
                            <FooterLink to={"/about"}>Terms and Conditions</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to={"/about"}>How It Works</FooterLink>
                            <FooterLink to={"/about"}>Testimonials</FooterLink>
                            <FooterLink to={"/about"}>Careers</FooterLink>
                            <FooterLink to={"/about"}>Investors</FooterLink>
                            <FooterLink to={"/about"}>Terms and Conditions</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to="/" onClick={toggleHome}>
                            GetData
                        </SocialLogo>
                        <WebsiteRights> GetData@{new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href={"/"} target={"_blank"} aria-label={"Facebook"}> <FaFacebook /> </SocialIconLink>
                            <SocialIconLink href={"/"} target={"_blank"} aria-label={"LinkedIn"}> <FaLinkedinIn /> </SocialIconLink>
                            <SocialIconLink href={"/"} target={"_blank"} aria-label={"Instagram"}> <FaInstagram /> </SocialIconLink>
                            <SocialIconLink href={"/"} target={"_blank"} aria-label={"Twitter"}> <FaTwitter /> </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;