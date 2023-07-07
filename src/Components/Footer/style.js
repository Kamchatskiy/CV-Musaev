import styled from "styled-components"

export const ContainerFooter = styled.div`
    height: 100px;
    width: 100%;

    position: absolute;
    bottom: 0;

    text-align: center;
    font-size: 35px;

    // border: 3px;
    // border-width: 3px;
    // border-style: dashed;
    
    display: flex;
    align-items: center;
    justify-content: left;
`;

export const CustomUl = styled.ul`
    display: flex;
    list-style: none;
`

export const SocialLink = styled.a`
    color: inherit;
    text-decoration: none;
    padding-left: 30px;
`