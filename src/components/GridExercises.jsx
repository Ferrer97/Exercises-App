import { Box, Typography, Stack } from "@mui/material";
import { Suspense } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { ExercisesCard } from "./ExercisesCard";

export const GridExercises = () => {
  const { allExercises } = useGlobalContext();
  return (
    <Box id="exercise" sx={{ mt: { lg: "30px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="30px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "20px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent={"center"}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {allExercises?.map((exercise) => (
            <ExercisesCard key={exercise.id} exercise={exercise} />
          ))}
        </Suspense>
      </Stack>
    </Box>
  );
};
