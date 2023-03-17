import { Button, Grid } from "@mui/material";
import { useGlobalContext } from "../hooks/useGlobalContext";

export const Filter = () => {
  const { bodyPartList, setSearchterm } = useGlobalContext();

  const handleClick = (evt) => {
    const value = evt.target.value;
    setSearchterm(value);
  };

  return (
    <Grid
      container
      spacing={1}
      columns={{ xs: 4, sm: 4, md: 10 }}
      justifyContent="center"
      alignItems="center"
    >
      {bodyPartList?.map((item) => (
        <Grid item key={item} xs={2} sm={2} md={4}>
          <Button
            value={item}
            onClick={handleClick}
            size="small"
            variant="contained"
            sx={{ width: "100%" }}
          >
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
