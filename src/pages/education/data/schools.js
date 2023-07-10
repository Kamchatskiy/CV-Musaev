import React from "react"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Container from "@mui/system/Container"

export const Schools = () => {
	return (
		<>
			<Container
				sx={{
					display: "flex",
				}}>
				<ListItemText primary="Moscow School 1239 (2014-2022)" />
				<ListItemButton
					component="a"
					href="https://coc1239.mskobr.ru/"
					sx={{
						textAlign: "center",
						backgroundColor: "#00ebd4",
						color: "#000000",
						width: "100%"
					}}
				>
					<ListItemText primary="Visit (RU)" />
				</ListItemButton>
			</Container>

			<Container
				sx={{
					display: "flex",
				}}
			>

				<ListItemText primary="Moscow HSE Lyceum (2022-Now)" />
				<ListItemButton
					component="a"
					href="https://school.hse.ru/ru/"
					sx={{
						textAlign: "center",
						backgroundColor: "#00ebd4",
						color: "#000000",
						width: "50%"
					}}
				>
					<ListItemText primary="Visit (RU)" />
				</ListItemButton>
				<ListItemButton
					component="a"
					href="https://school.hse.ru/en/"
					sx={{
						textAlign: "center",
						backgroundColor: "#00ebd4",
						color: "#000000",
						width: "50%"
					}}
				>
					<ListItemText primary="Visit (EN)" />
				</ListItemButton>
			</Container>
		</>
	)
}