import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faVk, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { ContainerFooter } from "./style.js"

const instagram = <FontAwesomeIcon icon={faInstagram} />
const youtube = <FontAwesomeIcon icon={faYoutube} />
const telegram = <FontAwesomeIcon icon={faTelegram} />
const vk = <FontAwesomeIcon icon={faVk} />

export const Footer = () => {
    return (
        <ContainerFooter>
            <ul>
                <li><a href="https://www.youtube.com/@kamch4tskiy">{youtube}</a></li>
                <li><a href="https://instagram.com/maratkamchatskiy">{instagram}</a></li>
                <li><a href="https://vk.com/maratkamchatskiy">{vk}</a></li>
            </ul>
            <ul>
                <li><a href="https://t.me/maratkamchatskiy">{telegram}</a></li>
            </ul>
        </ContainerFooter>
    );
}