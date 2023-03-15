import { useEffect, useState } from "react";

export const useFetchData = (url, options) => {
  const [isLoading, setIsLoading] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => setExercises(data));
    } catch (error) {
      setError(error);
    } finally {
      () => setIsLoading(false);
    }
  }, []);

  return { exercises, isLoading, error}
};
