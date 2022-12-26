import { Box, CardMedia, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import detailsImage from "../../static/Details.jpg"
import postImage from "../../static/cajon.jpg"
import Rightbar from '../rightbar/Rightbar';

const Details = () => {
  return (
    <Box>
      <Box sx={{
        backgroundImage: `url(${detailsImage})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        height: "250px",
        }}
      >
      <Typography
        align='center'
        color={"black"}
        variant='h2'
        sx={{ fontWeight: 900, padding: 10 }}
      >
      </Typography>
      </Box>
    <Container>
        <hr />
        <Stack
            direction={{ xs:"column", md:"row"}}
            spacing={{ xs:1, sm:2, md:8}}
            mt={8}
        >
         <Box flex={3} sx={{ padding: "18px 100px 100px 100px"}}>
            <Typography
                m={4}
                align="center"
                color={"gray"}
                variant="body1"
                sx={{ fontWeight: 900}}
            >
                Pagina en Construcción
            </Typography>
            <CardMedia
                component="img"
                height="20%"
                image={postImage}
                alt="capo emi"
            />
            <Typography 
                align='center' 
                variant='h4'
                mt={2}
            >
            Pruebita
            </Typography>
            <Typography 
                m={4}
                color={'gray'}
                variant='body1'
                sx={{ fontWeight: 900}}
            >
            Pruebitadfdsfsdfsdfsdfsdfsfd
            </Typography>
            <Box flex={1}>
                <Rightbar />
            </Box>
         <Box/>
         </Box>
        </Stack>
    </Container>
    </Box>
  );
}

export default Details;
