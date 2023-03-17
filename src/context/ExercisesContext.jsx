import { createContext, useEffect, useState } from "react";

const exerciseOptions = {
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_RAPID_API_KEY,
  },
};

const bodyPartsURL = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
const listByBodyPartURL =
  "https://exercisedb.p.rapidapi.com/exercises/bodyPart/";
const allExercisesURL = "https://exercisedb.p.rapidapi.com/exercises";
export const ExercisesContext = createContext();

export const ExercisesProvider = ({ children }) => {
  const [searchTerm, setSearchterm] = useState("");
  const [bodyPartList, setBodyPartList] = useState([]);
  const [exercises, setExercises] = useState([]);

  const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };

  const onBodyList = async (url, options) => {
    const bodyPartList = await fetchData(url, options);
    setBodyPartList(bodyPartList);
  };

  const onAllExercises = async (url, options) => {
    const allExercises = await fetchData(url, options);
    setExercises(allExercises);
  };

  useEffect(() => {
    onBodyList(bodyPartsURL, exerciseOptions);
  }, []);

  useEffect(() => {
    onAllExercises(allExercisesURL, exerciseOptions);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    onAllExercises(`${listByBodyPartURL}${searchTerm}`, exerciseOptions);
  }, [searchTerm]);

  return (
    <ExercisesContext.Provider
      value={{ bodyPartList, exercises, setSearchterm }}
    >
      {children}
    </ExercisesContext.Provider>
  );
};
