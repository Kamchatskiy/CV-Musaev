import React, { useState, Link } from "react";

//for "button"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

//for "select"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { 
    ContainerContacts,
    NameInput,
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

    function BasicSelect() {
        const [RequestType, setRequestType] = React.useState('');
      
        const handleChange = (event) => {
          setRequestType(event.target.value);
        }    
    };

    const [FieldsNotEmpty, checkFields] = useState(false)

    return (
        <ContainerContacts>
            <NameInput />
            <MessageInput />

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={"work"}>Work Hiring</MenuItem>
                        <MenuItem value={"outsource"}>Outsource Order</MenuItem>
                        <MenuItem value={"other"}>Other</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Button variant="contained" onClick={()=>{checkFields}}>Send</Button>
            {FieldsNotEmpty === true ? <h2>Your message was successfully sent</h2> && <p>sending email</p> : <h2>You need to fill all fields</h2>}
            <ContactsPhoto src=""/>
        </ContainerContacts>
    );
}
/*


  return (
    
  );
}
*/

        // <input value={UserInput} onChange={handlerOnChangeInput}/>
        // <button onClick={()=>{setUserInput("")}}>Clear</button>
        // <button onClick={()=>{setAboba(!aboba)}}>Change</button>
        // {aboba === true && <h1>{UserInput}</h1>}