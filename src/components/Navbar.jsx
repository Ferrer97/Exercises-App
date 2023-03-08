import { AppBar, Toolbar, Typography, Stack, Link } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Work out</Typography>
        <Stack direction="row" spacing={2}>
          <Link href="#" sx={{ color : '#FFF'}}>Home</Link>
          <Link href="#" sx={{ color : '#FFF'}}>Exercises</Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
