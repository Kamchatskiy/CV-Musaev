import React from "react"
import ListItemText from "@mui/material/ListItemText"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"

export const Works = () => {
	return (
		<>
			<Stack direction="row" alignItems="center" spacing={2}>
				<ListItemText
					primary="Dutch Store IkwordMama (August-September 2021)"
					secondary="Internship (not connected with Programming)"
				/>

				<Button
					variant="contained"
					component="a"
					href="https://www.ikwordmama.nl/"
					target="_blank"
					rel="noopener noreferrer"
					sx={{
						backgroundColor: "#00ebd4",
						color: "#000000",
						minWidth: "120px",
					}}
				>
					Link
				</Button>
			</Stack>
		</>
	)
}