import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faVk, faTelegram, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons"
import { ContainerFooter } from "./style.js"
import { List, ListItem } from "@mui/material"

const instagram = <FontAwesomeIcon icon={faInstagram} />
const youtube = <FontAwesomeIcon icon={faYoutube} />
const telegram = <FontAwesomeIcon icon={faTelegram} />
const vk = <FontAwesomeIcon icon={faVk} />
const github = <FontAwesomeIcon icon={faGithub} />

export const Footer = () => {
	return (
		<ContainerFooter>

			<List
				sx={{
					display: "flex",
				}}
			>
				<ListItem
					component="a"
					href="https://www.youtube.com/@kamch4tskiy"
					style={{ textDecoration: "none", color: "inherit"}}
				>
					{youtube}
				</ListItem>
				<ListItem
					component="a"
					href="https://instagram.com/maratkamchatskiy"
					style={{ textDecoration: "none", color: "inherit"}}
				>
					{instagram}
				</ListItem>
				<ListItem
					component="a"
					href="https://vk.com/maratkamchatskiy"
					style={{ textDecoration: "none", color: "inherit"}}
				>
					{vk}
				</ListItem>
				<ListItem
					component="a"
					href="https://t.me/maratkamchatskiy"
					style={{ textDecoration: "none", color: "inherit"}}
				>
					{telegram}
				</ListItem>
				<ListItem
					component="a"
					href="https://github.com/Kamchatskiy"
					style={{ textDecoration: "none", color: "inherit"}}
				>
					{github}
				</ListItem>
			</List>
		</ContainerFooter>
	)
}