import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faMicrochip, faGears } from "@fortawesome/free-solid-svg-icons";
import { ContainerListRatings } from "../style";

export const CyberSecurity = () => {
    const security_icon = <FontAwesomeIcon icon={faShieldAlt} style={{ color: "#00ebd4" }} />;
    const hardware_icon = <FontAwesomeIcon icon={faMicrochip} style={{ color: "#00ebd4" }} />;
    const reverse_icon = <FontAwesomeIcon icon={faGears} style={{color: "#00ebd4",}} />

    const [ratingVisible, setRatingVisible] = useState(false);

    const handleToggle = () => {
        setRatingVisible(!ratingVisible);
    };

    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360 }}>
                <ListItem>
                    <ListItemIcon>
                        {security_icon}
                    </ListItemIcon>
                    <ListItemText primary="CyberSecurity" />
                    <Switch
                        edge="end"
                        onChange={handleToggle}
                        checked={ratingVisible}
                    />
                </ListItem>
            </List>

            {ratingVisible && (
                <>
                    <ContainerListRatings>
                        <Typography component="legend">Reverse Engineering {reverse_icon}</Typography>
                        <Rating value={2} size="large" readOnly />
                        <Typography component="legend">Hardware Hacking {hardware_icon}</Typography>
                        <Rating value={1} size="large" readOnly />
                    </ContainerListRatings>
                </>
            )}
        </>
    );
};