import React from "react"
import { Link } from "react-router-dom"
import Switch from '@mui/material/Switch'
import FormControlLabel from "@mui/material/FormControlLabel"

import { ContainerMain, MyPicture } from "./style.js"
import avatar from "./avatar.png"

export const Main = () => {
    return (
        <ContainerMain>
            <h1>dev</h1>
            <MyPicture src={avatar}/>
        </ContainerMain>
    )
}