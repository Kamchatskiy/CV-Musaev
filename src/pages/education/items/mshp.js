import React from "react"
import ListItemText from "@mui/material/ListItemText"
import Stack from "@mui/material/Stack"
import data from "../data/mshp.json"
import Certificate from "../components/certificate"

export const MSHP = () => {
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
						<ListItemText>Duration: {course.duration}</ListItemText>
						<ListItemText>Mark: {course.mark}</ListItemText>
					</Stack>
					<Certificate 
					
					/>
				</Stack>
			))}
		</>
	)
}