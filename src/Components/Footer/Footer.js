import { Box, Typography } from '@mui/material';
import React from 'react';
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
const Footer = () => {
    return (
      <Box sx={{ color: "white", bgcolor: "#3E317C" }}>
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="700"
          size="large"
          display= "flex"
          justifyContent="center"
        >
          Developer Site
          <DeveloperBoardIcon sx={{mt:.5, ml:2}}/>
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          fontWeight="700"
          size="large"
          wrap="true"
        >
          Copyright &#169; {new Date().getFullYear()} - All right reserved.
        </Typography>
      </Box>
    );
};

export default Footer;