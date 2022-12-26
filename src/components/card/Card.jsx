import { Box, CardContent, CardMedia,Link, Typography } from '@mui/material';
import React from 'react';

const Card = ({cardImage}) => {
  return (
    <Box>
      <Link href="http://localhost:3000/details">
    {" "}
    <CardMedia
    component="img"
    height="100%"
    image={cardImage}
  />
  <CardContent>
    <Typography 
      gutterBottom 
      variant="body1" 
      align='center' 
      component="div" 
      color={'red'}
    >
      Hombre
    </Typography>
    <Typography 
      gutterBottom 
      variant="h5" 
      align='center' 
      component="div" 
      fontFamily={"Brush Script MT"}
    >
      Nueva temporada
    </Typography>
    <Typography 
      gutterBottom 
      variant="body2" 
      align='center' 
      component="div" 
      color="text.secondary"
    >
      Acierta con las novedades en ropa y accesorios más actuales y para todos los estilos.
    </Typography>
    <Typography 
      variant="h5" 
      align='center' 
      color="text.secondary"
    >
      Camisas, pantalones, sudaderas o zapatillas de última moda para hombres que buscan un look a la última.
    </Typography>
  </CardContent>
  </Link>
  </Box>
  );
};

export default Card;
