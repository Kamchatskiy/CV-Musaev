import React from "react"
import { ContainerMain, MyPicture } from "./style.js"
import avatar from "./avatar.png"

export const Main = () => {
	return (
		<ContainerMain>
			<h1>dev</h1>
			<MyPicture src={avatar} />
		</ContainerMain>
	)
}