import React from "react"
import { ContainerHeader } from "./style.js";
import {Link, Route} from "react-router-dom"

export const Header = ({hHeader}) => {
    return (
        <ContainerHeader>
            <Link to="/"><p>Main</p></Link>
            {/* <Link to="/"><p></p></Link>
            <Link to="/"><p></p></Link>             */}
        </ContainerHeader>
    );
}