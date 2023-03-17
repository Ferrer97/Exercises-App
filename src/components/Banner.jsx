import { Box, Button, Grid, Stack, Typography } from "@mui/material";
export const Banner = () => {
  return (
    <Box
      id="home"
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gap={2}
      justifyContent="center"
      alignItems={"center"}
      marginTop={2}
    >
      <Box
        gridColumn="span 5"
        sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 5" } }}
      >
        <Stack spacing={2} alignItems="center" justifyContent={"center"}>
          <Typography align="center" variant="h5" sx={{ fontWeight: 700 }}>
            Find all the exercises you need
          </Typography>
          <Typography align="center" sx={{ textTransform: "uppercase" }}>
            Train, Sleep and repeat
          </Typography>
          <Button variant="contained">See more</Button>
        </Stack>
      </Box>
      <Box
        gridColumn="span 7"
        sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 7" } }}
      >
        <img
          className="banner__img"
          src="../src/assets/banner.jpg"
          alt="banner"
        />
      </Box>
    </Box>
  );
};
