import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

export default function index() {
  return (
    <div>
      <Box py={5} bgcolor="text.primary" color="white">
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h5">Job App</Typography>
              <Button variant="contained">Post a job</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
