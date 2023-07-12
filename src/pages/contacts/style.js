import styled from "styled-components"
import TextField from "@mui/material/TextField"

export const ContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  gap: 16px;
`

export const NameInput = styled(TextField)`
  width: 40%;
`

export const UserContactInput = styled(TextField)`
  width: 40%;
`

export const MessageInput = styled(TextField)`
  width: 40%;
`