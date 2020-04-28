import React, { useState, useEffect } from "react";
import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const useLocalState = (
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
      console.log(result);
      localStorage.setItem(key, JSON.stringify(result));
      return newValue;
    });
  };

  return [value, setValueInLocalStorage];
};

function App() {
  const [theme, setTheme] = useLocalState("theme", "light");

  return (
    <div className="App">
      <h1>Hello world</h1>
      <h1>{theme}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle theme
      </button>
    </div>
  );
}

export default App;
