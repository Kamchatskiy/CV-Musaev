import React, { useState } from "react";

//for "button"
import Button from '@mui/material/Button';

//for "select"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { 
    ContainerContacts,
    NameInput,
    UserContactInput,
    MessageInput,
    ContactsPhoto
} from "./style";

export const Contacts = () => {
    // const [UserInput, setUserInput] = useState("Marat")
    // const [aboba, setAboba] = useState(false)
    // const handlerOnChangeInput = (event) => {
    //   setUserInput(event.target.value)
    //   console.log(UserInput)
    // }

    const [UserName, setUserName] = useState("")
    const handlerOnChangeUserNameInput = (event) => {
        setUserName(event.target.value)
    }   

    const [UserContact, setUserContact] = useState("")
    const handlerOnChangeUserContactInput = (event) => {
        setUserContact(event.target.value)
    }    

    const [UserMessage, setUserMessage] = useState("")
    const handlerOnChangeUserMessageInput = (event) => {
        setUserMessage(event.target.value)
    }    

    const [RequestType, setRequestType] = React.useState("");
    const handleChangeRequestType = (event) => {
      setRequestType(event.target.value);
    } 

    const [FieldsNotEmpty, checkFields] = useState(false)

    return (
        <ContainerContacts>
            <NameInput variant="outlined" value={UserName} onChange={handlerOnChangeUserNameInput}/>
            <UserContactInput variant="outlined" value={UserContact} onChange={handlerOnChangeUserContactInput}/>
            <MessageInput variant="outlined" value={UserMessage} onChange={handlerOnChangeUserMessageInput}/>

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel>Dispatch Reason</InputLabel>
                    <Select
                        value={RequestType}
                        onChange={handleChangeRequestType}
                    >
                        <MenuItem value={"work"}>Work Hiring</MenuItem>
                        <MenuItem value={"outsource"}>Outsource Order</MenuItem>
                        <MenuItem value={"other"}>Other</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Button variant="contained" onClick={()=>{checkFields}}>Send</Button>
            {FieldsNotEmpty === true ? <h2>Your message was successfully sent</h2> && <p>sending email</p> : <h2>You need to fill all fields</h2>}
            <MyPhoto src=""/>
        </ContainerContacts>
    );
}
        // <input value={UserInput} onChange={handlerOnChangeInput}/>
        // <button onClick={()=>{setUserInput("")}}>Clear</button>
        // <button onClick={()=>{setAboba(!aboba)}}>Change</button>
        // {aboba === true && <h1>{UserInput}</h1>}