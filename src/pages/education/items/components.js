import React from "react"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import PropTypes from "prop-types"

export const SubList = ({ Name, SubItems }) => {
	const [open, setOpen] = React.useState(false)

	const handleClick = () => {
		setOpen(!open)
	}

	SubList.propTypes = {
		Name: PropTypes.string.isRequired,
		SubItems: PropTypes.element.isRequired,
	}

	return (
		<>
			<List
				sx={{
					width: "100%",
					border: 1,
					borderColor: "#00ebd4",
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