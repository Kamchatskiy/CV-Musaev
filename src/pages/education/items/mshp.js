import React from "react"
import ListItemText from "@mui/material/ListItemText"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import data from "../data/mshp.json"

export const MSHP = () => {
	return (
		<>
			{data.map((course) => (
				<Stack
					key={course.title}
					direction="row"
					alignItems="center"
					spacing={2}
				>
					<ListItemText primary={course.title} />
					<ListItemText>
                        Duration: {course.duration}
                        Mark: {course.mark}
					</ListItemText>
					<Button
						variant="contained"
						target="_blank"
						rel="noopener noreferrer"
						sx={{
							backgroundColor: "#00ebd4",
							color: "#000000",
							minWidth: "120px",
						}}
					>
                        Certificate
					</Button>
				</Stack>
			))}
		</>
	)
}