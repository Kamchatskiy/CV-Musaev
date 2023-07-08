import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faCode } from "@fortawesome/free-solid-svg-icons";
import { faJava, faPhp, faPython, faRust } from "@fortawesome/free-brands-svg-icons";
import { ContainerListRatings } from "../style";

export const Programming = () => {
    const code_icon = <FontAwesomeIcon icon={faCode} style={{color: "#00ebd4",}} />
    const php_icon = <FontAwesomeIcon icon={faPhp} style={{ color: "#00ebd4" }} />
    const python_icon = <FontAwesomeIcon icon={faPython} style={{color: "#00ebd4",}} />
    const c_icon = <FontAwesomeIcon icon={faC} style={{color: "#00ebd4",}} />
    const rust_icon = <FontAwesomeIcon icon={faRust} style={{color: "#00ebd4",}} />
    const java_icon = <FontAwesomeIcon icon={faJava} style={{color: "#00ebd4",}} />

    const [ratingVisible, setRatingVisible] = useState(false);

    const handleToggle = () => {
        setRatingVisible(!ratingVisible);
  };

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360 }}>
        <ListItem>
          <ListItemIcon>
            <ListItemIcon>{code_icon}</ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Programming & BackEnd" />
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
          <Typography component="legend">{c_icon} | {c_icon}++</Typography>
          <Rating value={4} size="large" readOnly />
          <Typography component="legend">Rust {rust_icon}</Typography>
          <Rating value={0} size="large" readOnly />
          <Typography component="legend">Python {python_icon}</Typography>
          <Rating value={4} size="large" readOnly />
          <Typography component="legend">Java {java_icon}</Typography>
          <Rating value={0} size="large" readOnly />
          <Typography component="legend">PHP {php_icon}</Typography>
          <Rating value={0} size="large" readOnly />
        </ContainerListRatings>
        </>
      )}
    </>
  );
};