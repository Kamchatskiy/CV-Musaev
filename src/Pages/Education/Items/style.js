import React from 'react';
// import styled from "styled-components";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// export const MainList = styled(List)`

// `

import { styled } from '@mui/material/styles';

export const MainList = styled(List)(() => ({
    width: "100%",
    border: 1,
    borderColor: "#00ebd4"
}));