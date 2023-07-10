import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3Alt, faDocker, faGitAlt, faHtml5, faJava, faJsSquare, faLinux, faPhp, faPython, faReact, faRust, faWindows } from "@fortawesome/free-brands-svg-icons"
import { faC, faCode, faGears, faMicrochip, faServer, faShieldAlt, faTerminal, faWindowMaximize } from "@fortawesome/free-solid-svg-icons"
import { Skill } from "./skill.js"
import { ContainerSkills } from "./style.js"


export const Skills = () => {

	const arrayProgramming = [
		{
			text: "",
			icon: <FontAwesomeIcon icon={faC} style={{ color: "#00ebd4", }} />,
			rating: 3
		},
		{
			text: "Rust",
			icon: <FontAwesomeIcon icon={faRust} style={{ color: "#00ebd4", }} />,
			rating: 0
		},
		{
			text: "Python",
			icon: <FontAwesomeIcon icon={faPython} />,
			rating: 3
		},
		{
			text: "Java",
			icon: <FontAwesomeIcon icon={faJava} style={{ color: "#00ebd4", }} />,
			rating: 0
		},
		{
			text: "PHP",
			icon: <FontAwesomeIcon icon={faPhp} style={{ color: "#00ebd4", }} />,
			rating: 0
		},
	]

	const arrayFrontEnd = [
		{
			text: "HTML",
			icon: <FontAwesomeIcon icon={faHtml5} style={{ color: "#00ebd4", }} />,
			rating: 3
		},
		{
			text: "CSS",
			icon: <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#00ebd4", }} />,
			rating: 3
		},
		{
			text: "JS",
			icon: <FontAwesomeIcon icon={faJsSquare} style={{ color: "#00ebd4", }} />,
			rating: 3
		},
		{
			text: "React",
			icon: <FontAwesomeIcon icon={faReact} style={{ color: "#00ebd4", }} />,
			rating: 2
		},

	]

	const arraySysAdm = [
		{
			text: "Linux",
			icon: <FontAwesomeIcon icon={faLinux} style={{ color: "#00ebd4", }} />,
			rating: 3
		},
		{
			text: "Sh | Bash",
			icon: <FontAwesomeIcon icon={faTerminal} style={{ color: "#00ebd4", }} />,
			rating: 3
		},
		{
			text: "Git",
			icon: <FontAwesomeIcon icon={faGitAlt} style={{ color: "#00ebd4", }} />,
			rating: 2
		},
		{
			text: "Docker",
			icon: <FontAwesomeIcon icon={faDocker} style={{ color: "#00ebd4", }} />,
			rating: 3
		},
		{
			text: "Windows",
			icon: <FontAwesomeIcon icon={faWindows} style={{ color: "#00ebd4", }} />,
			rating: 3
		},
	]

	const arrayCyberSecurity = [
		{
			text: "Reverse Engineering",
			icon: <FontAwesomeIcon icon={faGears} style={{ color: "#00ebd4", }} />,
			rating: 2
		},
		{
			text: "Hardware Hacking",
			icon: <FontAwesomeIcon icon={faMicrochip} style={{ color: "#00ebd4", }} />,
			rating: 1
		},
	]

	return (
		<ContainerSkills>

			<Skill
				title="Programming"
				icon={<FontAwesomeIcon icon={faCode} style={{ color: "#00ebd4" }} />}
				array={arrayProgramming}
			/>

			<Skill
				title="FrontEnd"
				icon={<FontAwesomeIcon icon={faWindowMaximize} style={{ color: "#00ebd4" }} />}
				array={arrayFrontEnd}
			/>

			<Skill
				title="DevOps & SysAdm"
				icon={<FontAwesomeIcon icon={faServer} style={{ color: "#00ebd4", }} />}
				array={arraySysAdm}
			/>

			<Skill
				title="CyberSecurity"
				icon={<FontAwesomeIcon icon={faShieldAlt} style={{ color: "#00ebd4", }} />}
				array={arrayCyberSecurity}
			/>

		</ContainerSkills>
	)
}