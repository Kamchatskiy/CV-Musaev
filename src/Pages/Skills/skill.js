import React, { useState } from "react"
import PropTypes from "prop-types"
import Typography from "@mui/material/Typography"
import Rating from "@mui/material/Rating"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Switch from "@mui/material/Switch"
import { ContainerListRatings } from "./style"

export const Skill = ({ title, icon, array }) => {
	const [ratingVisible, setRatingVisible] = useState(false)

	const handleToggle = () => {
		setRatingVisible(!ratingVisible)
	}

	return (
		<>
			<List sx={{ width: "100%", maxWidth: 360 }}>
				<ListItem>
					<ListItemIcon>{icon}</ListItemIcon>
					<ListItemText primary={title} />
					<Switch
						edge="end"
						onChange={handleToggle}
						checked={ratingVisible}
						sx={{ 
							backgroundColor: "#00ebd4",
							borderRadius: 30
						}}
					/>
				</ListItem>
			</List>

			{ratingVisible && (
				<>
					<ContainerListRatings>
						{array.map((item) => (
							<div key={item.text}>
								<Typography component="legend">
									{item.text} {item.icon}
								</Typography>
								<Rating value={item.rating} size="large" readOnly />
							</div>
						))}
					</ContainerListRatings>
				</>
			)}
		</>
	)
}

Skill.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
	array: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			icon: PropTypes.element.isRequired,
			rating: PropTypes.number.isRequired,
		})
	).isRequired,
}