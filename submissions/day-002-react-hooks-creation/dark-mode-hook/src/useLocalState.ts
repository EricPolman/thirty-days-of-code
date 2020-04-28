import { useState, useEffect } from "react";

export const useLocalState = (
  key: string,
  defaultValue: any
): [string, (newValue: any) => void] => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    const listener = (event: StorageEvent) => {
      if (event.storageArea === localStorage && event.key === key) {
        setValue(event.newValue !== null ? JSON.parse(event.newValue) : null);
      }
    };
    window.addEventListener("storage", listener);

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key]);

  const setValueInLocalStorage = (newValue: any | (() => any)) => {
    setValue((currentValue: string) => {
      const result =
        typeof newValue === "function" ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));
      return newValue;
    });
  };

  return [value, setValueInLocalStorage];
};
