import { useContext } from "react";
import { ExercisesContext } from "../context/ExercisesContext";

export const useGlobalContext = () => {
  return useContext(ExercisesContext);
};
