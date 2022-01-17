import React from "react";
import { Box, Select, MenuItem, Button } from "@mui/material";

// const useStyles = makeStyles({
//   wrapper: {
//     border: "1px solid border",
//   },
// });

export default function search(props) {
  return (
    <div>
      <Box>
        <Select disableUnderline variant="filled" defaultValue="Full time">
          <MenuItem value="Full time">Full time</MenuItem>
          <MenuItem value="Part time">Part time</MenuItem>
        </Select>

        <Select disableUnderline variant="filled" defaultValue="Remote">
          <MenuItem value="Remote">Remote</MenuItem>
          <MenuItem value="Office">Office</MenuItem>
        </Select>
        <Button variant="contained">Search</Button>
      </Box>
    </div>
  );
}
