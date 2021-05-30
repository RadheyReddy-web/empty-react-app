import { useState } from 'react';
export const useSessionStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });
  const setValue = value => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (err) {
      console.error(err);
    }
  };
  return [storedValue, setValue];
};

export default useSessionStorage;
