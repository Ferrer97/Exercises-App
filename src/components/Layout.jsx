import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./";

export const Layout = () => {
  return (
    <Box>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
};
