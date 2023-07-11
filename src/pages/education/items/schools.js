import React from "react"
import ListItemText from "@mui/material/ListItemText"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"

export const Schools = () => {
	return (
		<>
			<Stack direction="row" alignItems="center" spacing={2}>
				<ListItemText primary="Moscow School 1239 (2014-2022)" />

				<Button
					variant="contained"
					component="a"
					href="https://coc1239.mskobr.ru/"
					target="_blank"
					rel="noopener noreferrer"
					sx={{
						backgroundColor: "#00ebd4",
						color: "#000000",
						minWidth: "120px",
					}}
				>
					Visit (RU)
				</Button>
			</Stack>

			<Stack direction="row" alignItems="center" spacing={2}>
				<ListItemText primary="Moscow HSE Lyceum (2022-Now)" />

				<Button
					variant="contained"
					component="a"
					href="https://school.hse.ru/ru/"
					target="_blank"
					rel="noopener noreferrer"
					sx={{
						backgroundColor: "#00ebd4",
						color: "#000000",
						minWidth: "120px",
					}}
				>
					Visit (RU)
				</Button>

				<Button
					variant="contained"
					component="a"
					href="https://school.hse.ru/en/"
					target="_blank"
					rel="noopener noreferrer"
					sx={{
						backgroundColor: "#00ebd4",
						color: "#000000",
						minWidth: "120px",
					}}
				>
					Visit (EN)
				</Button>
			</Stack>
		</>
	)
}