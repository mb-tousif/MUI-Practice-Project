import React from 'react';
import HeroImage from '../../Images/bg.png';
import { CardMedia, Stack } from '@mui/material';


const TopBanner = () => {
    return (
      <Stack>
        <CardMedia
          component="img"
          image={HeroImage}
          alt="World Map"
        />
      </Stack>
    );
};

export default TopBanner;