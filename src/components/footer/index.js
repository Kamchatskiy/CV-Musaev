import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faVk, faTelegram, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons"
import { ContainerFooter, CustomUl, SocialLink } from "./style.js"

const instagram = <FontAwesomeIcon icon={faInstagram} />
const youtube = <FontAwesomeIcon icon={faYoutube} />
const telegram = <FontAwesomeIcon icon={faTelegram} />
const vk = <FontAwesomeIcon icon={faVk} />
const github = <FontAwesomeIcon icon={faGithub} />

export const Footer = () => {
	return (
		<ContainerFooter>
			<CustomUl>
				<li><SocialLink href="https://www.youtube.com/@kamch4tskiy">{youtube}</SocialLink></li>
				<li><SocialLink href="https://instagram.com/maratkamchatskiy">{instagram}</SocialLink></li>
				<li><SocialLink href="https://vk.com/maratkamchatskiy">{vk}</SocialLink></li>
				<li><SocialLink href="https://t.me/maratkamchatskiy">{telegram}</SocialLink></li>
				<li><SocialLink href="https://github.com/Kamchatskiy">{github}</SocialLink></li>
			</CustomUl>
		</ContainerFooter>
	)
}