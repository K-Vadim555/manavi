import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes , Route , Link, BrowserRouter} from 'react-router-dom'
import { Typography } from '@mui/material';
import '../../../styles/navBar.scss'

export default function SwipeableTemporaryDrawer({posts}) {
  const [state, setState] = React.useState({
   
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const navItems = [
 
    {
      link: 'Бронь',
      key:3,
      id:'#masa',
    },
    {
      link: 'Галерея',
      key:4,
      id:'#galary',
    },
    {
      link: 'Контакты',
      key:5,
      id:'#contacts',
    },
    {
      link: 'Вакансии',
      key:6,
      id:'#voc',
    },
  ]
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       <Typography className='drawer-header-title' >
        Manavi
      </Typography>
      <Divider />
      <List className='drawer-header-links' sx={{display:'block'}}> 
        {posts.map((item) => (
          <ListItem key={item.id} disablePadding>
          
            <ListItemButton sx={{ textAlign: 'center'}}> 
            
               {item.link}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
     
    </Box>
  );

  return (
    <>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        
        </React.Fragment>
      ))}
    </>
  );
}