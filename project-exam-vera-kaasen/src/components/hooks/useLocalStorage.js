import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  //id??
  // state to store our value

  // Pass initial state function to iseState so logic is only executed once

  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);

      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // if error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState\s setter function that
  // persist the new value to localStorage
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have some API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Save state
      setStoredValue(valueToStore);

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
}

//NB MER HER??
