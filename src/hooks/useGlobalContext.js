import { useContext } from "react";
import { ExercisesContext } from "../context/ExercisesContext";

export const useGlobalCnext = () => {
  return useContext(ExercisesContext);
};
