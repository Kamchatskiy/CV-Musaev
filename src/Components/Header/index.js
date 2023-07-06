import React from "react"

//for "tab"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { ContainerHeader, PageLink, GitHubLink } from "./style.js";

export const Header = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        // <ContainerHeader>
        //     <PageLink to="/">Main</PageLink>
        //     <PageLink to="/Education">Education</PageLink>
        //     <PageLink to="/Skills">Skills</PageLink>
        //     <PageLink to="/Projects">Projects</PageLink>
        //     <GitHubLink href="https://github.com/Kamchatskiy">Github</GitHubLink>
        //     <PageLink to="/Contacts">Contacts</PageLink>
        // </ContainerHeader>
        <ContainerHeader>
        <Box sx={{ width: '100%' }}>
            <Tabs
            value={value}
            onChange={handleChange}
            textColor="one"
            indicatorColor="primary"
            >
                <Tab value="one" label="Main"><PageLink to="/" /></Tab>
                <Tab value="two" label=""><PageLink to="/Education">Education</PageLink></Tab>
                
                <Tab value="three" label="Skills"><PageLink to="/Skills" /></Tab>
                <Tab value="four" label="Projects"><PageLink to="/Projects" /></Tab>
                <Tab value="five" label="Github"><GitHubLink href="https://github.com/Kamchatskiy" /></Tab>
                <Tab value="six" label="Contacts"><PageLink to="/Contacts" /></Tab>

            </Tabs>
        </Box>
        </ContainerHeader>
      
    );
}