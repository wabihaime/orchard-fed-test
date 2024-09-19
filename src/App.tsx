import React from "react";
import "./App.css";
import { FirstComponent } from "./components/first-component";
import { SecondComponent } from "./components/second-component";

const App: React.FC = () => {
  return (
    <main>
      <FirstComponent />
      <SecondComponent />
    </main>
  );
};

export default App;
