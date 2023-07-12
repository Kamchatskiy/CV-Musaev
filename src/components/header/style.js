import styled from "styled-components"
import Tab from "@mui/material/Tab"
import ListItem from "@mui/material/ListItem"

export const ContainerHeader = styled.div`
  height: 150px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
;`

export const StyledTab = styled(Tab)`
  flex: 1;
;`

export const StyledLink = styled(ListItem)`
  text-decoration: none;
  color: #00ebd4;
`