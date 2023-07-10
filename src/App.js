import React from "react"
import {
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { Main } from "./pages/main"
import { Education } from "./pages/education"
import { Skills } from "./pages/skills"
import { Contacts } from "./pages/contacts"

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