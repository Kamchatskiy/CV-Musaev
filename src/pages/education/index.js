import React from "react"
import { SubList } from "./items/components"
import { ContainerEducation } from "./style"
import { Schools } from "./items/schools"
import { Works } from "./items/works"
import { MSHP } from "./items/mshp"
import { Courses } from "./items/courses"

export const Education = () => {
	return (
		<ContainerEducation>
			<SubList
				Name="Schools"
				SubItems={[<Schools key="schools" />]}
			/>
			<SubList
				Name="Courses"
				SubItems={[<Courses key="courses" />]} />
			<SubList
				Name="MSHP"
				SubItems={[<MSHP key="mshp" />]} />
			<SubList
				Name="Works"
				SubItems={[<Works key="works" />]} />
		</ContainerEducation>
	)
}