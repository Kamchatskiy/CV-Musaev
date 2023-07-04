import React from "react"
import { ContainerHeader, CustomLink } from "./style.js";

export const Header = () => {
    return (
        <ContainerHeader>
            <CustomLink to="/">Main</CustomLink>
            <CustomLink to="/Education">Education</CustomLink>
            <CustomLink to="/Skills">Skills</CustomLink>
            <CustomLink to="/Projects">Projects</CustomLink>
            <CustomLink to="/Contacts">Contacts</CustomLink> 
        </ContainerHeader>
    );
}