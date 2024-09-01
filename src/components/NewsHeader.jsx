import { AppBar, Toolbar, Typography } from "@mui/material";

function NewsHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">News feed</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NewsHeader;
