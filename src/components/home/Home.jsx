import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import Categories from "../../components/category/Categories";
import Hero from "../../components/hero/Hero";
import Recents from "../../components/recents/Recents";
import Rightbar from '../rightbar/Rightbar';

const Home = () => {
  return (
    <Box>
        <Hero />
        <Container>
                <Categories />
                <hr />
            <Stack  direction={'row'} spacing={8} mt={6}>
                <Box flex={3} sx={{ padding: "18px 100px 100px 100px"}}>
                    <Recents />
                </Box>
                <Box flex={1}>
                    <Rightbar />
                </Box>
            </Stack>
        </Container>
    </Box>
  );
}

export default Home;
