import { Button, Grid } from "@mui/material";
import { useGlobalContext } from "../hooks/useGlobalContext";

export const Filter = () => {
  const { exercisesParts } = useGlobalContext();

  return (
    <Grid
      container
      spacing={1}
      columns={{ xs: 4, sm: 4, md: 10 }}
      justifyContent="center"
      alignItems="center"
    >
      {exercisesParts?.map((item) => (
        <Grid item key={item} xs={2} sm={2} md={4}>
          <Button size="small" variant="contained" sx={{ width: "100%" }}>
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
