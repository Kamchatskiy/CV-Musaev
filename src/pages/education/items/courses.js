import React from "react"
import ListItemText from "@mui/material/ListItemText"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import data from "../data/courses.json"

export const Courses = () => {
	return (
		<>
			{data.map((course) => (
				<Stack
					key={course.title}
					direction="row"
					alignItems="flex-start"
					spacing={2}
				>
					<ListItemText primary={course.title} />
					<Stack direction="column">
						<ListItemText>
                            Duration: {course.duration}
						</ListItemText>
					</Stack>
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