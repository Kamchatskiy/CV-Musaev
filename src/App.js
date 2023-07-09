import React from "react"
import {
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom"

import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"

import { Main } from "./Pages/Main"
import { Education } from "./Pages/Education"
import { Skills } from "./Pages/Skills"
import { Contacts } from "./Pages/Contacts"

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="education" element={<Education />} />
					<Route path="skills" element={<Skills />} />
					<Route path="contacts" element={<Contacts />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}