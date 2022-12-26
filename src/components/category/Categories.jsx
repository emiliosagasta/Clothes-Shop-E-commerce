import { Box, Stack, Typography, styled } from '@mui/material';
import React from 'react';
import KidsImage from "../../static/HeroKids.jpg"
import MenImage from "../../static/HeroMen.jpg"
import WomanImage from "../../static/WomanHero.jpg"

const StyledBox = styled(Box)({
    height:200,
    width:'100%',
    cursor:"pointer",
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center', //posicion de la imagen
    backgroundSize:'cover', //para que esté todo cubierto
});
const Styledtypography = styled(Typography)({
    margin:'25% 50px 25% 50px',
    background:'white',
    opacity:'0.8'
});

const Categories = () => {
  return (
    <Box>
        <Stack direction={{xs:'column', sm:'row'}} spacing={{xs:1,sm:2,md:4}} mt={5}>
            <StyledBox sx={{backgroundImage:`url(${KidsImage})`}}>
              <Styledtypography align='center' variant='h3'>
                Kids
              </Styledtypography>
            </StyledBox>
            <StyledBox sx={{backgroundImage:`url(${MenImage})`}}>
              <Styledtypography align='center' variant='h3'>
                Men
              </Styledtypography>
            </StyledBox>
            <StyledBox  sx={{backgroundImage:`url(${WomanImage})`}}>
              <Styledtypography align='center' variant='h3'>
                Women
              </Styledtypography>
            </StyledBox>
        </Stack>
    </Box>
  );
}

export default Categories;
