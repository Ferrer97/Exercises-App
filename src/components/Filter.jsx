import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import { useGlobalContext } from "../hooks/useGlobalContext";

export const Filter = () => {
  const {exercises } = useGlobalContext();
  console.log(exercises);
  const exercisesOption = [
    {
      bodyPart: "back",
    },
    {
      bodyPart: "biceps",
    },
  ];
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.bodyPart,
  });

  return (
    <Autocomplete
      id="filter-demo"
      options={exercisesOption}
      getOptionLabel={(option) => option.bodyPart}
      filterOptions={filterOptions}
      sx={{ width: 220 }}
      renderInput={(params) => <TextField {...params} label="Body Part" />}
    />
  );
};
