import React, { forwardRef, useEffect, useState } from "react"
import Button from "@mui/material/Button"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import MuiAlert from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar"
import Stack from "@mui/material/Stack"
import { ContainerContacts, NameInput, UserContactInput, MessageInput } from "./style"
import anime from "animejs"

export const Contacts = () => {
	const [UserName,
		setUserName] = useState("")
	const handlerOnChangeUserNameInput = (event) => {
		const value = event.target.value
		const regex = /^[a-zA-Z\s]*$/
		if (value.length <= 30 && regex.test(value)) {
			setUserName(value)
		}
	}

	const [UserContact,
		setUserContact] = useState("")
	const handlerOnChangeUserContactInput = (event) => {
		const value = event.target.value
		if (value.length <= 40) {
			setUserContact(value)
		}
	}


	const [UserMessage,
		setUserMessage] = useState("")
	const handlerOnChangeUserMessageInput = (event) => {
		setUserMessage(event.target.value)
	}

	const [RequestType,
		setRequestType] = useState("")
	const handleChangeRequestType = (event) => {
		setRequestType(event.target.value)
	}

	const [FieldsNotEmpty,
		setFieldsNotEmpty] = useState(false)

	const handleSend = () => {
		if (UserName && UserContact && UserMessage && RequestType) {
			setFieldsNotEmpty(true)
			handleClick()
		} else {
			setFieldsNotEmpty(false)
		}
	}

	const Alert = forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
	})

	const [open,
		setOpen] = useState(false)
	const handleClick = () => {
		setOpen(true)
	}
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return
		}
		setOpen(false)
	}

	useEffect(() => {
		anime({
			targets: ".container",
			opacity: [0, 1],
			translateX: [-250, 0],
			duration: 1500,
			easing: "easeInOutQuad",
		})
	}, [])

	return (
		<>
			<ContainerContacts
				className="container"
			>

				<NameInput
					label="Name"
					variant="filled"
					sx={{
						backgroundColor: "#00ebd4",
						borderRadius: 30
					}}
					required="true"
					value={UserName}
					textColor="primary"
					onChange={handlerOnChangeUserNameInput} />

				<UserContactInput
					label="Email/Telegram/PhoneNumber"
					variant="filled"
					sx={{
						backgroundColor: "#00ebd4",
						borderRadius: 30
					}}
					required="true"
					value={UserContact}
					onChange={handlerOnChangeUserContactInput} />

				<MessageInput
					label="Message"
					variant="filled"
					sx={{
						backgroundColor: "#00ebd4",
						borderRadius: 10
					}}
					required="true"
					value={UserMessage}
					onChange={handlerOnChangeUserMessageInput}
					multiline
					rows={4} />

				<FormControl
					sx={{
						width: "40%",
						backgroundColor: "#00ebd4",
						borderRadius: 30,
					}}
					required="true"
					variant="filled"
				>

					<InputLabel>Dispatch Reason</InputLabel>
					<Select
						sx={{
							backgroundColor: "#00ebd4",
							borderRadius: 30,
						}}
						value={RequestType}
						onChange={handleChangeRequestType}
					>
						<MenuItem value={"work"}>Work Hiring</MenuItem>
						<MenuItem value={"outsource"}>Outsource Order</MenuItem>
						<MenuItem value={"other"}>Other</MenuItem>
					</Select>
				</FormControl>

				<Stack spacing={2} sx={{
					width: "100%"
				}}>
					<Button
						variant="contained"
						sx={{
							width: "16%",
							height: "70px",
							backgroundColor: "#00ebd4",
							borderRadius: 5,
							color: "black"
						}}
						onClick={handleSend}
					>
						Send
					</Button>

					<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
						{FieldsNotEmpty
							? (
								<Alert
									onClose={handleClose}
									severity="success"
									sx={{
										width: "100%"
									}}>
									Your message was successfully sent
								</Alert>
							)
							: (
								<Alert
									onClose={handleClose}
									severity="error"
									sx={{
										width: "100%"
									}}>
									You need to fill all fields
								</Alert>
							)}
					</Snackbar>
				</Stack>
			</ContainerContacts>
		</>
	)
}