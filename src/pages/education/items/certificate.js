import React, { useState } from "react"
import Backdrop from "@mui/material/Backdrop"
import Button from "@mui/material/Button"

export default function Certificate(certificateSrc) {
	const [open, setOpen] = useState(false)
	const handleClose = () => {
		setOpen(false)
	}
	const handleOpen = () => {
		setOpen(true)
	}

	return (
		<div>
			<Button
				variant="contained"
				target="_blank"
				rel="noopener noreferrer"
				sx={{
					backgroundColor: "#00ebd4",
					color: "#000000",
					minWidth: "120px",
				}}
				onClick={handleOpen}

			>
                Certificate
			</Button>
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={open}
				onClick={handleClose}
			>
				<img src={certificateSrc} />
			</Backdrop>
		</div>
	)
}