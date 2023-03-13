import { createContext, useEffect, useState } from "react";

const exerciseOptions = {
  // method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_RAPID_API_KEY,
  },
};

const rapidURL = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";

export const ExercisesContext = createContext();

export const ExercisesProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [exercises, setExercises] = useState([]);

  const fetchData = async (url, options) => {
    setIsLoading(true);
    try {
      const resp = await fetch(url, options);
      const data = await resp.json();
      setExercises(data);
    } catch (error) {
      console.log(error);
    } finally {
      () => setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(rapidURL, exerciseOptions);
  }, []);

  return (
    <ExercisesContext.Provider value={{ exercises, isLoading }}>
      {children}
    </ExercisesContext.Provider>
  );
};
