import { AppBar, Toolbar, Typography, Stack, Link } from "@mui/material";
import { GitHub, Code, LinkedIn } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction={"row"} spacing={2}>
          <GitHub sx={{ cursor: "pointer" }} />
          <Code sx={{ cursor: "pointer" }} />
          <LinkedIn sx={{ cursor: "pointer" }} />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Link href="#home" sx={{ color: "#FFF" }}>
            Home
          </Link>
          <Link href="#exercise" sx={{ color: "#FFF" }}>
            Exercises
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
