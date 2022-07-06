import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
const GridLayout = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              backgroundColor: "steelblue",
              height: 60,
              padding: 3,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            Full Width Box
          </Box>
        </Grid>
        <Grid item xs={4} md={4}>
          <Box
            sx={{
              backgroundColor: "primary.light",
              height: 40,
              padding: 3,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            xs=4 md=4
          </Box>
        </Grid>
        <Grid item xs={4} md={4}>
          <Box
            sx={{
              backgroundColor: "primary.light",
              height: 40,
              padding: 3,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            xs=4 md=4
          </Box>
        </Grid>
        <Grid item xs={4} md={4}>
          <Box
            sx={{
              backgroundColor: "primary.light",
              height: 40,
              padding: 3,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            xs=4 md=4
          </Box>
        </Grid>
        <Grid item xs={3} md={3}>
          <Box
            sx={{
              backgroundColor: "steelblue",
              height: 30,
              padding: 3,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            xs=3 md=3
          </Box>
        </Grid>
        <Grid item xs={3} md={3}>
          <Box
            sx={{
              backgroundColor: "steelblue",
              height: 30,
              padding: 3,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            xs=3 md=3
          </Box>
        </Grid>
        <Grid item xs={3} md={3}>
          <Box
            sx={{
              backgroundColor: "steelblue",
              height: 30,
              padding: 3,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            xs=3 md=3
          </Box>
        </Grid>
        <Grid item xs={3} md={3}>
          <Box
            sx={{
              backgroundColor: "steelblue",
              height: 30,
              padding: 3,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            xs=3 md=3
          </Box>
        </Grid>

        <Grid item xs={12} md={12}>
          <Box
            sx={{
              backgroundColor: "primary.dark",
              height: 40,
              padding: 3,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            xs=12 md=12
          </Box>
        </Grid>
      </Grid>
      <Divider/>
    </Box>
  );
};

export default GridLayout;
