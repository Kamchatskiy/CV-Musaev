import React from "react"
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';

//icons
//frontend
import WebIcon from '@mui/icons-material/Web'; 
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

//backend
import StorageIcon from '@mui/icons-material/Storage'; 

//programming
import CodeIcon from '@mui/icons-material/Code'; 

//sysadm
import TerminalIcon from '@mui/icons-material/Terminal';

//cybersec
import SecurityIcon from '@mui/icons-material/Security';


import {ContainerSkills} from "./style.js"

export const Skills = () => {

    const [checked,
        setChecked] = React.useState(['wifi']);
    const [ratingVisible,
        setRatingVisible] = React.useState(false);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
            setRatingVisible(true); // Раскрываем рейтинг при включении свитча
        } else {
            newChecked.splice(currentIndex, 1);
            setRatingVisible(false); // Скрываем рейтинг при выключении свитча
        }

        setChecked(newChecked);
    };

    return (
        <ContainerSkills>
            <List
                sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'white'
            }}>
                <ListItem>
                    <ListItemIcon>
                        {/* <WifiIcon /> */}
                    </ListItemIcon>
                    <ListItemText primary="Wi-Fi"/>
                    <Switch
                        edge="end"
                        onChange={handleToggle('wifi')}
                        checked={checked.indexOf('wifi') !== -1}
                        inputProps={{
                        'aria-labelledby': 'switch-list-label-wifi'
                    }}/>
                </ListItem>
            </List>

            {ratingVisible && ( 
                <> 
                <Typography component="legend">Read only</Typography> 
                < Rating name = "read-only" value = {5}
                size = "large" readOnly /> 
                </>)}
        </ContainerSkills>
    )
}