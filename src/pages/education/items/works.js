import React from "react"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Container from "@mui/system/Container"

export const Works = () => {
	return (
		<>
			<Container
				sx={{
					display: "flex"
				}}
			>
				<ListItemText
					primary="Dutch Store IkwordMama (August-September 2021)"
					secondary="Internship (not connected with Programming)"
				/>
				<ListItemButton
					component="a"
					href="https://www.ikwordmama.nl/"
					sx={{
						textAlign: "center",
						backgroundColor: "#00ebd4",
						color: "#000000",
					}}
				>
					<ListItemText primary="Link" />
				</ListItemButton>
			</Container>
		</>
	)
}