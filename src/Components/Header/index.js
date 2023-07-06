import React from "react"
import { Link } from "react-router-dom"
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
        <ContainerHeader>
            <Box sx={{ width: '100%' }}>
                <Tabs
                value={value}
                onChange={handleChange}
                textColor="one"
                indicatorColor="primary"
                >
                    <Tab label="Main" component={Link} to="/" />
                    <Tab label="Education" component={Link} to="/Education" />
                    <Tab label="Skills" component={Link} to="/Skills" />
                    <Tab label="Projects" component={Link} to="/Projects" />
                    <Tab label="Github" component="a" href="https://github.com/Kamchatskiy" target="_blank" rel="noopener noreferrer" />
                    <Tab label="Contacts" component={Link} to="/Contacts" />
                </Tabs>
            </Box>
        </ContainerHeader>
      
    );
}