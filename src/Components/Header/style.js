import styled from "styled-components"
import { Link } from "react-router-dom"

export const ContainerHeader = styled.div`
    @import url(https://fonts.googleapis.com/css?family=Share+Tech);
    font-family: "Share Tech";
    color: #00ebd4;
    font-size: 65px;

    height: 100px;
    width: 100%;
    background-color: #000000;
    
    text-align: center;

    border: 3px;
    border-width: 5px;
    border-style: dashed;

    padding-top: 1%;
    
    align-items: center;
    justify-content: center;
`;

export const PageLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    padding-left: 5%;
;`

export const GitHubLink = styled.a`
    color: inherit;
    text-decoration: none;
    padding-left: 5%;
`