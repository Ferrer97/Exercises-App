import { createContext, useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";

const exerciseOptions = {
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_RAPID_API_KEY,
  },
};

const bodyPartsURL = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
const allExercisesURL = "https://exercisedb.p.rapidapi.com/exercises";
export const ExercisesContext = createContext();

export const ExercisesProvider = ({ children }) => {
 
  const {exercises : exercisesParts } = useFetchData(bodyPartsURL, exerciseOptions);

  const {exercises : allExercises} = useFetchData(allExercisesURL, exerciseOptions);
 

  return (
    <ExercisesContext.Provider value={{ exercisesParts, allExercises }}>
      {children}
    </ExercisesContext.Provider>
  );
};
