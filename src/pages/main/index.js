import React, { useEffect } from "react"
import { ContainerMain } from "./style.js"
import anime from "animejs"
import avatar from "./avatar.png"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"

export const Main = () => {
	useEffect(() => {
		anime({
			targets: ".avatar",
			opacity: [0, 1],
			translateX: [600, 0],
			duration: 1500,
			easing: "easeInOutQuad",
		})
		anime({
			targets: ".title",
			opacity: [0, 1],
			translateX: [-600, 0],
			duration: 1500,
			easing: "easeInOutQuad",
		})
	}, [])

	return (
		<ContainerMain>

			<Typography
				variant="h1"
				className="title"
				sx={{
					paddingLeft: "15%",
					paddingTop: "7%",
				}}
			>
				Marat Musaev
				<Typography
					variant="h2"
					sx={{
						paddingLeft: "10%"
					}}
				>
					Beginner Developer
				</Typography>
			</Typography>

			<Avatar
				className="avatar"
				src={avatar}
				sx={{
					width: "640px",
					height: "640px",
					position: "absolute",
					right: "100px"
				}}
			/>

		</ContainerMain>
	)
}