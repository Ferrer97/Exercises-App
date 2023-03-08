import { Box, Button, Typography } from "@mui/material";

export const Banner = () => {
  return (
    <Box display = 'flex' alignContent="center" justifyContent="center" sx={{ mt: "65px",  gap : '20px' }}>
      <Box>
        <Typography variant="h5" sx={{ textAlign : 'center', }}>
          Become the best version of you whit these exercises
        </Typography>
        <Button variant="contained" size="small" sx={{ my: "20px" }}>
          see more
        </Button>
      </Box>
      <Box>
        <Typography variant= "h4" sx={{ display : { xs : 'none', sm : 'block'}}}>Hola imagen</Typography>
      </Box>
    </Box>
  );
};
