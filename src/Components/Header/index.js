import React from "react"
import { ContainerHeader, PageLink, GitHubLink } from "./style.js";

export const Header = () => {
    return (
        <ContainerHeader>
            <PageLink to="/">Main</PageLink>
            <PageLink to="/Education">Education</PageLink>
            <PageLink to="/Skills">Skills</PageLink>
            <PageLink to="/Projects">Projects</PageLink>
            <GitHubLink href="https://github.com/Kamchatskiy">Github</GitHubLink>
            <PageLink to="/Contacts">Contacts</PageLink>
        </ContainerHeader>
    );
}