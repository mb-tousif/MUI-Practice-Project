import React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from '@mui/material';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ContactForm = () => {
  return (
    <Stack
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Stack sx={{ padding: "10px", backgroundColor: "#74b9ff", width: "75%" }}>
        <Typography variant="h4">Contact Form</Typography>
        <Box sx={{ margin: "10px" }}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="User Name"
            fullWidth
          />
        </Box>
        <Box sx={{ margin: "10px" }}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
          />
        </Box>
        <Box sx={{ margin: "10px" }}>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Box>
        <Box>
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Write your comments"
            helperText="Some important comments"
            fullWidth
          />
        </Box>
        <Stack spacing={2} sx={{ margin: "10px" }}>
          <Button variant="contained">Submit</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactForm;