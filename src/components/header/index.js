import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Tabs from "@mui/material/Tabs"
import Box from "@mui/system/Box"
import { ContainerHeader, StyledTab, StyledLink } from "./style.js"

export const Header = () => {
	const [listVisibility, setListVisibility] = useState(false)
	const toggleListVisibility = () => {
		setListVisibility(!listVisibility)
	}
	const offListVisibility = () => {
		setListVisibility(false)
	}

	const location = useLocation()
	const [activeTab, setActiveTab] = useState("/")

	useEffect(() => {
		setActiveTab(location.pathname)
	}, [location.pathname])

	const handleChangeTab = (event, newTab) => {
		setActiveTab(newTab)
		offListVisibility()
	}

	return (
		<ContainerHeader>
			<Box
				sx={{
					width: "100%",
				}}
			>
				<Tabs
					onChange={handleChangeTab}
					value={activeTab}
					textColor="one"
					indicatorColor="primary"
				>
					<StyledTab value="/" label="Main" component={Link} to="/" />
					<StyledTab
						value="/Education"
						label="Education"
						component={Link}
						to="/Education"
					/>
					<StyledTab
						value="/Skills"
						label="Skills"
						component={Link}
						to="/Skills"
					/>
					{listVisibility ? (
						<Box
							sx={{
								width: "100%",
								maxWidth: 150,
								bgcolor: "background.paper",
							}}
						>
							<nav>
								<List>
									<StyledLink
										disablePadding
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
					) : (
						<StyledTab
							value="Projects"
							label="Projects"
							component="button"
							onClick={toggleListVisibility}
						/>
					)}
					<StyledTab
						value="/Github"
						label="Github"
						component="a"
						href="https://github.com/Kamchatskiy"
						target="_blank"
						rel="noopener noreferrer"
					/>
					<StyledTab
						value="/Contacts"
						label="Contacts"
						component={Link}
						to="/Contacts"
					/>
				</Tabs>
			</Box>
		</ContainerHeader>
	)
}