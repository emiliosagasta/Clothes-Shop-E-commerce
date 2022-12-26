import { 
    Avatar, 
    Box,  
    Divider, 
    List, 
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    Typography
    } from '@mui/material';
import React from 'react';
import postImage1 from "../../static/Masvendido4.jpg"
import postImage2 from "../../static/Masvendido2.jpg"
import postImage3 from "../../static/Masvendido33.jpg"
//import postImage4 from "../../static/yo.jpg"

const Rightbar = () => {
  return (
    <Box>
            <Typography align='center' bgcolor={"black"} color="white">
                Most Popular
            </Typography>
            <List sx={{ 
                width: '100%',
                height:'100',
                maxWidth: 360,
                bgcolor: 'background.paper' 
                }}
            >
            <ListItem alignItems="flex-end">
                <ListItemAvatar>
                    <Avatar 
                        sx={{height:80, width:80}}
                        variant="Square" 
                        alt="Remy Sharp" 
                        src={postImage1}
                    />
                </ListItemAvatar>
                <ListItemText
                    secondary=
                        {" — Chaqueta Vaquera Cuello Borreguillo"}
                />
            </ListItem>
            <ListItem alignItems="flex-end">
                <ListItemAvatar>
                    <Avatar 
                        sx={{height:80, width:80}}
                        variant="Square" 
                        alt="Remy Sharp" 
                        src={postImage2}
                    />
                </ListItemAvatar>
                <ListItemText
                    secondary=
                        {" — Jersey Navideño Papa Noel"}
                />
            </ListItem>
            <ListItem alignItems="flex-end">
                <ListItemAvatar>
                    <Avatar 
                        sx={{height:80, width:80}}
                        variant="Square" 
                        alt="Remy Sharp" 
                        src={postImage3}
                    />
                </ListItemAvatar>
                <ListItemText
                    secondary=
                        {" — Jersey Navideño Rojo Pingüinos"}
                />
            </ListItem>
            <Divider variant='inset' component={'li'} />
        </List>
        <Typography align='center' bgcolor={"black"} color="white">
            About us
        </Typography>
        <Typography>
            <hr />
            At SecondHand we believe in the value of a second use. Sell what you no longer use and give your clothes a new opportunity. Buy exclusive items that you will not find in stores. Long live good clothes!
        </Typography>
    </Box>

  );
};

export default Rightbar;
