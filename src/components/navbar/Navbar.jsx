import React from 'react';
import { AppBar, Toolbar, styled, Box, Typography, InputBase, MenuItem, Menu as MenuIcon, Menu} from '@mui/material';
import {Facebook, Twitter, LinkedIn} from '@mui/icons-material/';
import { useState } from 'react';

const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between",
    });

    const SocialBox = styled(Box)({
        display:'flex',
        gap: 5,
        color:'springgreen'
    });
    
    const MenuBox = styled(Box)({
        display:'flex',
        gap: 30,
    });

    const SearchBox = styled(Box)({
        display:'flex',
        gap: 5,
    });
  
    const MenuItems = [
    {Name:'Home', Link:'/'},
    {Name:'Products', Link:'#'},
    {Name:'Portfolio', Link:'#'},
    {Name:'Blog', Link:'#'},
    {Name:'Contact us', Link:'#'}
    ];

    const [open, setOpen] = useState(false);

    return (
     <AppBar sx={{ background:"#244173"}} position={'static'}>
        <StyledToolbar>
            <SocialBox>
                <Twitter />
                <Facebook />
                <LinkedIn />
            </SocialBox>
            <MenuBox sx={{ display: {xs:"none", sm:"none", md:"flex" } }}>
              {MenuItems.map((item)=> (
                <Typography 
                    sx={{ cursor: "pointer",
                        color:'springgreen',
                        fontSize:"18px"
                        }}
                    >
                        {item.Name}
                </Typography>
                ))}
            </MenuBox>
            
            <SearchBox>
                <InputBase placeholder="Search..." sx={{ color:"springgreen"}} />             
                <MenuIcon
                 sx={{
                     color: "white",
                     display: { xs:"block", sm:"block", md: "none"}, 
                    }}
                onClick={() => setOpen(!open)}
                />
            </SearchBox>
        </StyledToolbar> 
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() =>setOpen(!open)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >

      <Box sx={{width:350, height:"90vh"}}>
      {MenuItems.map((item)=> (
        <MenuItem 
            sx={{ cursor: "pointer",
                color:'springgreen',
                fontSize:"18px"
                }}
            >
                {item.Name}
            </MenuItem>
    ))}
       </Box>
      </Menu>
    </AppBar>
  );  
};

export default Navbar;
