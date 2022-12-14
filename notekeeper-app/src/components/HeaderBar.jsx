import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu }  from '@mui/icons-material';
import logo from '../images/logo.svg'

const Header = styled(AppBar)`
  z-index: 1201;
  background: #B0BEFF;
  height: 70px;
  
  box-shadow: inset 0 -1px 0 0 #dadce0;
`
const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px
`
const HeaderBar = ({open, handleDrawer}) => {
  
    return (
        <Header open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            edge="start"
            sx={{ marginRight: '20px'}}
          >
           <Menu/>
          </IconButton>
          <img src={logo} alt="logo" style={{width: 100, height: 100}} />
          <Heading>Note Keeper</Heading>
        </Toolbar>
      </Header>
    );
}
export default HeaderBar;