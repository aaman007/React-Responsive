import React from "react";

import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarButtonWrapper, SidebarRoute } from "./SidebarElements";

const Sidebar = ({ toggle, isOpen }) => {

    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to={"about"} onClick={toggle}> About </SidebarLink>
                    <SidebarLink to={"discover"} onClick={toggle}> Discover </SidebarLink>
                    <SidebarLink to={"services"} onClick={toggle}> Services </SidebarLink>
                    <SidebarLink to={"signup"} onClick={toggle}> Sign Up </SidebarLink>
                </SidebarMenu>
                <SidebarButtonWrapper>
                    <SidebarRoute to={"sign-in"}> Sign In </SidebarRoute>
                </SidebarButtonWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;