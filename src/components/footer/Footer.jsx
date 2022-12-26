import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const SocialBox = styled(Box)({
    display:'flex',
    gap: 10,
    color:'springgreen'
});

const Footer = () => {
  return (
    <Box
     sx={{
        background:'#244173',
        height:'300px'
     }}
    >
        <Stack direction={{xs:'row', md:'row'}} p={7}>
            <Box flex={1}>
                <Typography sx={{fontWeight:'bold', color:'white'}} align={'center'}>
                    Help 
                </Typography>
                <Typography color={'springgreen'} align={'center'}>
                    Customer Support
                </Typography>
                <Typography color={'springgreen'} align={'center'}>
                    Store Locator
                </Typography>
                <Typography color={'springgreen'} align={'center'}>
                    Work with us
                </Typography>
            </Box>
            <Box flex={1}>
                <Typography color={'white'} sx={{fontWeight:'bold', color:'white'}} align={'center'}>
                    My Account
                </Typography>
                <Typography color={'springgreen'} align={'center'}>
                    Log In
                </Typography>
                <Typography color={'springgreen'} align={'center'}>
                    Register
                </Typography>
                <Typography color={'springgreen'} align={'center'}>
                    Shipping Addresses
                </Typography>
                <Typography color={'springgreen'} align={'center'}>
                    Order History
                </Typography>
            </Box>
            <Box flex={1}>
                <Typography color={'white'} sx={{fontWeight:'bold', color:'white'}} align={'center'}>
                Categories 
                </Typography>
                <Typography color={'springgreen'} variant={'body2'} align={'center'}>
                    Kids
                </Typography>
                <Typography color={'springgreen'} variant={'body2'} align={'center'}>
                    Men
                </Typography>
                <Typography color={'springgreen'} variant={'body2'} align={'center'}>
                    Women
                </Typography>
            </Box>
            <Box>
                <Typography color={'springgreen'} sx={{fontWeight:'bold', color:'white'}} align={'center'}>
                    Follow us
                </Typography>
                <SocialBox>
                    <Twitter />
                    <Facebook />
                    <LinkedIn />
                </SocialBox>
            </Box>
        </Stack>
    </Box>
  );
}

export default Footer;
