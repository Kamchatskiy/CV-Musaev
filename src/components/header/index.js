import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Tabs from "@mui/material/Tabs"
import Box from "@mui/system/Box"
import { ContainerHeader, StyledTab } from "./style.js"

export const Header = () => {
	const [setListVisibility] = useState(false)
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
					<StyledTab
						value="/Blog"
						label="Blog"
						component={Link}
						to="/Blog"
					/>
					<StyledTab
						value="/Projects"
						label="Projects"
						component={Link}
						to="/Projects"
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