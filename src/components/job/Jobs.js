import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

export default function jobs(props) {
  return (
    <div>
      <Box bgcolor="text.secondary">
        <Grid container>
          <Grid item xs>
            <Typography>{props.title}</Typography>
            <Typography>{props.companyName}</Typography>
          </Grid>
          <Grid item xs display="flex">
            {props.skills.map((e) => (
              <Grid key={e} item>
                {e}
              </Grid>
            ))}
          </Grid>
          <Grid item xs>
            <Typography>
              {props.type} | {props.location}
            </Typography>
            <button variant="outlined">Check</button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
