import React, { useState } from "react"
import { Link } from "react-router-dom"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Tabs from "@mui/material/Tabs"
import Box from "@mui/system/Box"
import { ContainerHeader, StyledTab, StyledLink } from "./style.js"

export const Header = () => {

	const [listVisibility, setListVisibility] = useState(false)
	const toggleListVisibility = () => { setListVisibility(!listVisibility) }
	const offListVisibility = () => { setListVisibility(false) }

	const [color, setColor] = useState("one")
	const handleChangeTab = (event, newColor) => {
		setColor(newColor)
		offListVisibility()
	}

	return (
		<ContainerHeader>
			<Box sx={{
				width: "100%"
			}}>
				<Tabs
					onChange={handleChangeTab}
					value={color}
					textColor="one"
					indicatorColor="primary"
				>
					<StyledTab value="one" label="Main" component={Link} to="/" />
					<StyledTab value="two" label="Education" component={Link} to="/Education" />
					<StyledTab value="three" label="Skills" component={Link} to="/Skills" />
					{listVisibility ?
						(
							<Box sx={{
								width: "100%",
								maxWidth: 150,
								bgcolor: "background.paper"
							}}>
								<nav>
									<List>
										<StyledLink disablePadding
											component="a"
											href="https://github.com/Kamchatskiy/CV-Musaev"
											target="_blank"
											rel="noopener noreferrer"
										>
											<ListItemButton>
												<ListItemText primary="CV Website" />
											</ListItemButton>
										</StyledLink>

										<ListItem disablePadding>
											<ListItemButton>
												<ListItemText primary="Coming Soon..." />
											</ListItemButton>
										</ListItem>
									</List>
								</nav>
							</Box>
						)
						: (
							<StyledTab
								value="four"
								label="Projects"
								component="button"
								onClick={toggleListVisibility} />
						)
					}
					<StyledTab value="five" label="Github" component="a" href="https://github.com/Kamchatskiy" target="_blank" rel="noopener noreferrer" />
					<StyledTab value="six" label="Contacts" component={Link} to="/Contacts" />
				</Tabs>
			</Box >
		</ContainerHeader >
	)
}
