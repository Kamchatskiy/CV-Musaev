import React, { useEffect } from "react"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import PropTypes from "prop-types"
import anime from "animejs"

export const SubList = ({ Name, SubItems }) => {
	const [open, setOpen] = React.useState(false)

	const handleClick = () => {
		setOpen(!open)
	}

	SubList.propTypes = {
		Name: PropTypes.string.isRequired,
		SubItems: PropTypes.element.isRequired,
	}

	useEffect(() => {
		anime({
			targets: ".item",
			opacity: [0, 1],
			translateY: [-300, 0],
			duration: 1500,
			easing: "easeInOutQuad",
		})
	}, [])

	return (
		<>
			<List
				sx={{
					width: "100%",
					border: 1,
					borderColor: "#00ebd4",
					paddingLeft: "10px"
				}}
				component="nav"
				className="item"
			>
				<ListItemButton onClick={handleClick}>
					<ListItemText primary={Name} />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={open} timeout="auto" unmountOnExit>
					{SubItems}
				</Collapse>
			</List>
		</>
	)
}