import { Suspense, useState } from "react";
import { Box, Typography, Stack, Pagination } from "@mui/material";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { ExercisesCard } from "./ExercisesCard";

export const GridExercises = () => {
  const { exercises } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (evt, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

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
          {currentExercises?.map((exercise) => (
            <ExercisesCard key={exercise.id} exercise={exercise} />
          ))}
        </Suspense>
      </Stack>

      <Stack mt="80px" alignItems={"center"}>
        {exercises.length > exercisePerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};
