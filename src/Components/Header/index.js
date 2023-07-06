import React, { useState } from "react"
import { Link } from "react-router-dom"

//for "tab"
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';

import { ContainerHeader, StyledTab } from "./style.js";

export const Header = () => {

    const [color, setColor] = useState('one');
    const handleChangeColor = (event, newColor) => {
        setColor(newColor);
    };

    return (
        <ContainerHeader>
            <Box sx={{ width: '100%' }}>
                <Tabs
                onChange={handleChangeColor}
                value={color}
                textColor="one"
                indicatorColor="primary"
                >
                    <StyledTab value="one" label="Main" component={Link} to="/" />
                    <StyledTab value="two"label="Education" component={Link} to="/Education" />
                    <StyledTab value="three" label="Skills" component={Link} to="/Skills" />
                    <StyledTab value="four" label="Projects" component={Link} to="/Projects" />
                    <StyledTab value="five" label="Github" component="a" href="https://github.com/Kamchatskiy" target="_blank" rel="noopener noreferrer" />
                    <StyledTab value="six" label="Contacts" component={Link} to="/Contacts" />
                </Tabs>
            </Box>
        </ContainerHeader>
      
    );
}