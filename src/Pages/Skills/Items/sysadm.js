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
    const sysadm_icon = <FontAwesomeIcon icon={faServer} style={{color: "#00ebd4",}} />
    const linux_icon = <FontAwesomeIcon icon={faLinux} style={{color: "#00ebd4",}} />
    const terminal_icon = <FontAwesomeIcon icon={faTerminal} style={{color: "#00ebd4",}} />
    const windows_icon = <FontAwesomeIcon icon={faWindows} style={{color: "#00ebd4",}} />
    const docker_icon = <FontAwesomeIcon icon={faDocker} style={{color: "#00ebd4",}} />
    const git_icon = <FontAwesomeIcon icon="fa-brands fa-git-alt" style={{color: "#00ebd4",}} />

    const [ratingVisible, setRatingVisible] = useState(false);

    const handleToggle = () => {
        setRatingVisible(!ratingVisible);
  };

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360 }}>
        <ListItem>
          <ListItemIcon>
            <ListItemIcon>{}</ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="frontend" />
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