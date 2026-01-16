import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  // function to get the stored value
  const getStoredValue = useCallback(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error(`Error getting local storage key ${key}: `, error);
      return initialValue;
    }
  }, [initialValue, key]);

  const [value, setValue] = useState(getStoredValue);

  // write function to update the stored value
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn(`Error writing to local storage key “${key}”:`, err);
    }
  }, [key, value]);

  // simulate socket behavior with useEffect
  useEffect(() => {
    const handleStorageChange = () => {};
    if (event.key === key) {
      setValue(getStoredValue());
    }
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, getStoredValue]);
  return [value, setValue];
};
