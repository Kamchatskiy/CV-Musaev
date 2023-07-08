import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faSquareJs, faReact } from "@fortawesome/free-brands-svg-icons";

export const FrontEnd = () => {
    const frontend_icon = <FontAwesomeIcon icon={faWindowMaximize} style={{color: "#00ebd4",}} />
    const html_icon = <FontAwesomeIcon icon={faHtml5} style={{color: "#00ebd4",}} />
    const css_icon = <FontAwesomeIcon icon={faCss3Alt} style={{color: "#00ebd4",}} />
    const js_icon = <FontAwesomeIcon icon={faSquareJs} style={{color: "#00ebd4",}} />
    const react_icon = <FontAwesomeIcon icon={faReact} style={{color: "#00ebd4",}} />

    const [ratingVisible, setRatingVisible] = useState(false);

    const handleToggle = () => {
        setRatingVisible(!ratingVisible);
  };

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360 }}>
        <ListItem>
          <ListItemIcon>
            <ListItemIcon>{frontend_icon}</ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="FrontEnd" />
          <Switch
            edge="end"
            onChange={handleToggle}
            checked={ratingVisible}
          />
        </ListItem>
      </List>

      {ratingVisible && (
        <>
          <Typography component="legend">HTML {html_icon}</Typography>
          <Rating value={4} size="large" readOnly />
          <Typography component="legend">CSS {css_icon}</Typography>
          <Rating value={4} size="large" readOnly />
          <Typography component="legend">JS {js_icon}</Typography>
          <Rating value={3} size="large" readOnly />
          <Typography component="legend">React {react_icon}</Typography>
          <Rating value={2} size="large" readOnly />
        </>
      )}
    </>
  );
};