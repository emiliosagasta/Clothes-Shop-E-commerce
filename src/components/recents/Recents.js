import { Box, Grid } from '@mui/material';
import React from 'react';
import cardImage from "../../static/Cards.jpg";
import Card from '../card/Card';
import postImage1 from "../../static/Masvendido4.jpg"
import postImage2 from "../../static/Masvendido2.jpg"
import postImage3 from "../../static/Masvendido33.jpg"
import postImage4 from "../../static/Masvendido6.jpg"

//el rowspacing y columnspacing es para dar espacio entre columnas
const Recents = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={ {xs:1, sm:2, md:1}}>
        <Grid item>
          <Card cardImage={cardImage} />
        </Grid>
        <Grid item xs={12} md={6} sx={{background:'lightblue'}} >
          <Card cardImage={postImage2} />
        </Grid>
        <Grid item xs={12} md={6} sx={{background:'tomato'}}>
          <Card cardImage={postImage1} />
        </Grid>
        <Grid item xs={12} md={6} sx={{background:'orange'}}>
          <Card cardImage={postImage3} />
        </Grid>
        <Grid item xs={12} md={6} sx={{background:'lightgreen'}}>
          <Card cardImage={postImage4} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recents;
