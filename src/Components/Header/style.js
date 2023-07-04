import styled from "styled-components"
import { Link } from "react-router-dom"

export const ContainerHeader = styled.div`
    height: 100px;
    width: 100%;

    background-color: #000000;
    color: #00ebd4;

    text-align: center;
    font-size: 50px;

    border: 3px;
    border-width: 5px;
    border-style: dashed;
`;

export const CustomLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    margin-bottom: 20%;
    margin-left: 100px;
;`