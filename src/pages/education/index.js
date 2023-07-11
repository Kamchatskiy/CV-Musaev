import React from "react"
import { SubList } from "./components"
import { ContainerEducation } from "./style"
import { Schools } from "./items/schools"
import { Works } from "./items/works"
import { MSHP } from "./items/mshp"

export const Education = () => {
	return (
		<ContainerEducation>
			<SubList
				Name="Schools"
				SubItems={[<Schools key="schools" />]} />
			<SubList
				Name="MSHP"
				SubItems={[<MSHP key="mshp" />]} />
			<SubList
				Name="Works"
				SubItems={[<Works key="works" />]} />
		</ContainerEducation>
	)
}