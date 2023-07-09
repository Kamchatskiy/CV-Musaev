import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { MainList } from './style.js'

export const Schools = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <List
        sx={{
          width: '100%',
          border: 1,
          borderColor: "#00ebd4"
        }}
        component="nav"
      >
        <ListItemButton 
        onClick={handleClick}>
          <ListItemText primary="Schools" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" 
          sx={{ 
            display: "flex",
          }}
          >
            <ListItemText primary="Moscow School 1239 (2014-2022)" />
            <ListItemButton 
            component="a"
            href="https://coc1239.mskobr.ru/"
            sx={{ 
              textAlign: "center",
              backgroundColor: "#00ebd4",
              color: "#000000",
            }} 
            >
              <ListItemText primary="Visit (RU)" />
            </ListItemButton>
          </List>

          <List component="div" 
          sx={{ display: "flex" }}
          >
            <ListItemText primary="Moscow HSE Lyceum (2022-Now)" />
            <ListItemButton 
            component="a"
            href="https://school.hse.ru/ru/"
            sx={{ 
              textAlign: "center",
              backgroundColor: "#00ebd4",
              color: "#000000",
            }} 
            >
              <ListItemText primary="Visit (RU)" />
            </ListItemButton>
            <ListItemButton 
            primary="Link"
            component="a"
            href="https://school.hse.ru/en/"
            sx={{ 
              textAlign: "center",
              backgroundColor: "#00ebd4",
              color: "#000000",
            }} 
            >
              <ListItemText primary="Visit (EN)" />
            </ListItemButton>
          </List>

        </Collapse>
      </List>
  );
};