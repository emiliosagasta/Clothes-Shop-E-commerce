import { Box, Typography } from '@mui/material';
import React from 'react';
import HeroImage from "../../static/HeroImage2.jpg"

const Hero = () => {
  return (
    <Box>
      <Typography align='center' variant='h3' sx={{ fontWeight: 900}}>
      Second<b style={{color:"red"}}>Hand</b>
      </Typography>
      <Typography align='center' variant='body1' sx={{ fontWeight: 200}}>
        Dale segundas oportunidades a la ropa, no a tu ex !
      </Typography>
      <Box sx={{
        backgroundImage: `url(${HeroImage})` ,
        backgroundRepeat:'no-repeat',
        backgroundColor:'black',
        backgroundAttachment: "fixed",
        backgroundPosition:"center",
        backgroundSize:"cover",
        height: 600,
        width:'100%',
        display:'flex',
        justifyContent:'center',
      }}
      >
      <Box sx={{
        width:{xs:"100%", sm:"50%", md:"40%"},
        padding:{xs:20, sm:2, md:20},
      }}>


      <Box sx={{background:'white', opacity:'0.8'}}>
          <Typography variant="h6" color='#244173' align="center" pt={6}>
            Trending Styles
          </Typography>
          <Typography variant="h4" align="center">
            Life is boring without fashion!
          </Typography>
          <Typography variant="body1" align="center">
            We love to change your style..
          </Typography>
      </Box>
      </Box>
     </Box>
    </Box>
  );
};

export default Hero;
