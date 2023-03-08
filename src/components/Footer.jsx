import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Footer = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ fontSize: "24px", color: "FFF2625", textTransform: "capitalize", textAlign : 'center' }}
      >
        This page was made with love
      </Typography>{" "}
    </Box>
  );
};
