import styled from "styled-components";
import TextField from '@mui/material/TextField';

export const ContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 16px;
`;

export const NameInput = styled(TextField)`
  width: 300px;
`;

export const UserContactInput = styled(TextField)`
  width: 300px;
`;

export const MessageInput = styled(TextField)`
  width: 300px;
`;

export const ContactsPhoto = styled.img`
  width: 600px;
`