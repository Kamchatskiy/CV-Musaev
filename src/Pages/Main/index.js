import React from "react"
import { ContainerMain, MyPicture } from "./style.js"
import avatar from "./avatar.png"

export const Main = () => {
    return (
        <ContainerMain>
            <MyPicture src={avatar}/>
        </ContainerMain>
    )
}