import React from "react";
import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocalState } from "./useLocalState";

function App() {
  const [theme, setTheme] = useLocalState("theme", "light");

  return (
    <HelmetProvider>
      <Helmet>
        <body data-theme={theme} />
      </Helmet>
      <div className="App">
        <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
        <p>
          Minim quis velit ad minim sit ipsum cillum consectetur fugiat tempor
          magna. Ea sint tempor sint in sint non proident nostrud quis
          adipisicing. Id ut irure et exercitation est fugiat sint. Mollit quis
          eu non cillum ea exercitation laboris excepteur labore. Nisi occaecat
          nostrud ullamco ipsum ut ipsum cupidatat aute minim duis non laborum
          ea. Nostrud culpa elit ut id adipisicing sunt voluptate excepteur.
        </p>
        <p>
          Esse minim amet adipisicing eiusmod enim officia incididunt est.
          Aliqua anim eu consectetur sunt fugiat occaecat ex duis. Aliquip Lorem
          ut do amet irure veniam. Laborum sunt sit incididunt exercitation
          exercitation culpa non voluptate velit consequat dolore adipisicing.
          In ad eiusmod consequat voluptate fugiat exercitation do fugiat.
        </p>
        <p>
          Consequat adipisicing amet officia in. Sunt voluptate esse tempor in
          deserunt in et irure do do veniam cupidatat ut fugiat. Esse laborum
          cupidatat in consequat ut veniam labore consectetur adipisicing duis.
          Cupidatat nulla aute labore mollit ea consequat mollit laboris sit
          tempor.
        </p>
        <p>
          Exercitation voluptate ex qui amet non officia dolor est excepteur
          ullamco. Reprehenderit qui aliqua aute anim sit aliquip ut. Magna anim
          aliqua adipisicing pariatur. Do laboris adipisicing pariatur minim
          quis sit magna duis velit proident quis sunt ex consectetur. Dolor
          culpa duis veniam consequat dolore. Irure exercitation duis officia
          quis officia est. Excepteur elit sit veniam veniam eu voluptate aliqua
          tempor.
        </p>
        <button
          id="theme-button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <img src="flashlight.png" />
        </button>
      </div>
    </HelmetProvider>
  );
}

export default App;
