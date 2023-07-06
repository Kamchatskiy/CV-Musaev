import styled from "styled-components"
import Tab from '@mui/material/Tab';

export const ContainerHeader = styled.div`
  font-family: "Share Tech";
  color: #00ebd4;
  height: 150px;
  width: 100%;
  background-color: #000000;
  text-align: center;
  border: 3px dashed;
  display: flex;
  align-items: center;
  justify-content: center;
;`

export const StyledTab = styled(Tab)`
  flex: 1;
  text-align: center;
  border-bottom: none;
  padding: 10px;
;
`
/*
export const ContainerHeader = styled.div`
    @import url(https://fonts.googleapis.com/css?family=Share+Tech);
    font-family: "Share Tech";
    color: #00ebd4;
    font-size: 65px;

    height: 100px;
    width: 100%;
    background-color: #000000;
    
    text-align: center;

    border: 3px;
    border-width: 5px;
    border-style: dashed;

    padding-top: 1%;
    
    align-items: center;
    justify-content: center;
`;
*/