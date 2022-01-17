import React from "react";
import {
  Box,
  Grid,
  FilledInput,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

export default function PostJobs() {
  const skills = [
    "Javascript ",
    " React.js ",
    "Node.js ",
    "MongoDB ",
    "Express.js",
  ];

  return (
    <div>
      <Dialog open={true} fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between">
            <h4>Post Job</h4>
            <i>X</i>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid itme xs={12} sx={{ m: 1 }}>
              <FilledInput placeholder="job title" disableUnderline fullWidth />
            </Grid>
            <Grid itme xs={12} sx={{ m: 1 }}>
              <Select
                disableUnderline
                fullWidth
                disableUnderline
                variant="filled"
                defaultValue="Full time"
              >
                <MenuItem value="Full time">Full time</MenuItem>
                <MenuItem value="Part time">Part time</MenuItem>
              </Select>
            </Grid>
            <Grid itme xs={12} sx={{ m: 1 }}>
              <FilledInput
                placeholder="Company name"
                disableUnderline
                fullWidth
              />
            </Grid>
            <Grid itme xs={12} sx={{ m: 1 }}>
              <FilledInput placeholder="location" disableUnderline fullWidth />
            </Grid>
            <Grid itme xs={12} sx={{ m: 1 }}>
              <Select
                disableUnderline
                fullWidth
                disableUnderline
                variant="filled"
                defaultValue="Salary Range"
              >
                <MenuItem value="Salary Range">Salary Range</MenuItem>
                <MenuItem value="10k-20k">10k-20k</MenuItem>
                <MenuItem value="10k-20k">20k-30k</MenuItem>
                <MenuItem value="10k-20k">30k-40k</MenuItem>
                <MenuItem value="10k-20k">40k-50k</MenuItem>
              </Select>
            </Grid>

            <Grid itme xs={12} sx={{ m: 1 }}>
              <FilledInput
                placeholder="Job description"
                disableUnderline
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
          </Grid>

          <Box mt={2}>
            <Typography>Skills</Typography>
            <Box display="flex" spacing={3}>
              {skills.map((el) => (
                <Box key={el}>{el}</Box>
              ))}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Box>
            <Button variant="contained">Post job</Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}
