import React from "react"
import { Link } from "react-router-dom"
import { ContainerHeader } from "./style.js";

export const Header = () => {
    return (
        <ContainerHeader>
            <Link to="/"><p>Main</p></Link>
            <Link to="/Education"><p>Education</p></Link>
            <Link to="/Skills"><p>Skills</p></Link>
            <Link to="/Projects"><p>Projects</p></Link>
            <Link to="/Contacts"><p>Contacts</p></Link> 
            <a href="https://github.com/Kamchatskiy">GitHub</a>           
        </ContainerHeader>
    );
}