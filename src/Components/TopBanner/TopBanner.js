import React from 'react';
import HeroImage from '../../Images/bg.png';
import { Card, CardMedia, Stack } from '@mui/material';


const TopBanner = () => {
    return (
      <Stack>
        <Card>
          <CardMedia
            component="img"
            image={HeroImage}
            alt="World Map"
          />
        </Card>
      </Stack>
    );
};

export default TopBanner;