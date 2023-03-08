import { createContext } from "react";

export const ExercisesContext = createContext();

export const ExercisesProvider = ({ children }) => {
  return <ExercisesContext.Provider>{children}</ExercisesContext.Provider>;
};
