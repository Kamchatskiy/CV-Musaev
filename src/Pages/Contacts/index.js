import React, { useState } from "react";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Alert from "@mui/material/Alert";
import { 
        ContainerContacts, 
        NameInput, 
        UserContactInput, 
        MessageInput, 
        ContactsPhoto 
      } from "./style";

export const Contacts = () => {
  const [UserName, setUserName] = useState("");
  const handlerOnChangeUserNameInput = (event) => {
    setUserName(event.target.value);
  };

  const [UserContact, setUserContact] = useState("");
  const handlerOnChangeUserContactInput = (event) => {
    setUserContact(event.target.value);
  };

  const [UserMessage, setUserMessage] = useState("");
  const handlerOnChangeUserMessageInput = (event) => {
    setUserMessage(event.target.value);
  };

  const [RequestType, setRequestType] = React.useState("");
  const handleChangeRequestType = (event) => {
    setRequestType(event.target.value);
  };

  const [FieldsNotEmpty, checkFields] = useState(false);

  const handleSend = () => {
    if (UserName && UserContact && UserMessage && RequestType) {
      checkFields(true);
    } else {
      checkFields(false);
    }
  };

  return (
    <ContainerContacts>
      <NameInput
        label="Name"
        variant="outlined"
        value={UserName}
        textColor="primary"
        onChange={handlerOnChangeUserNameInput}
      />
      <UserContactInput
        label="Email/Telegram/PhoneNumber"
        variant="outlined"
        value={UserContact}
        onChange={handlerOnChangeUserContactInput}
      />
      <MessageInput
        label="Message"
        variant="outlined"
        value={UserMessage}
        onChange={handlerOnChangeUserMessageInput}
        multiline
        rows={4}
      />

      <FormControl >
        <InputLabel>Dispatch Reason</InputLabel>
        <Select value={RequestType} onChange={handleChangeRequestType}>
          <MenuItem value={"work"}>Work Hiring</MenuItem>
          <MenuItem value={"outsource"}>Outsource Order</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" onClick={handleSend}>Send</Button>
      {FieldsNotEmpty ? (
        <>
          <Alert severity="success">Your message was successfully sent</Alert>
        </>
      ) : (
        <Alert severity="error">You need to fill all fields</Alert>
      )}

      <ContactsPhoto />
    </ContainerContacts>
  );
};