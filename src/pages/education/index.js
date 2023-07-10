import React from "react"
import { SubList } from "./components"
import { ContainerEducation } from "./style"
import { Schools } from "./data/schools"
import { Works } from "./data/works"

export const Education = () => {
	return (
		<ContainerEducation>
			<SubList
				Name="Schools"
				SubItems={[<Schools key="schools" />]} />
			<SubList
				Name="Works"
				SubItems={[<Works key="works" />]} />
		</ContainerEducation>
	)
}