import { Box, Stack, Typography } from "@mui/material";
import { Filter } from "./";
import { useGlobalContext } from "../hooks/useGlobalContext";

export const Exercises = () => {
  // const { exercises } = useGlobalContext();
  // console.log(exercises);
  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <Typography variant="h4" align="center" sx={{ fontWeight: "500" }}>
        These are the exercises your looking for
      </Typography>
      <Typography variant="h6" align="center" sx={{ fontWeight: "500" }}>
        filter by the part of you body you wuold you like to exercise
      </Typography>
      <Filter />
    </Stack>
  );
};
