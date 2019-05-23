import React, { useState } from "react";
import "./App.css";
import Outer from "./components/Outer";

const nameInit = ["Archana", "Pushpa", "Deepthi", "peter", "john"];

function App() {
  const [names, setNames] = useState(nameInit);

  return (
    <div className="App">
      <header className="App-header">
        {names.map(name => (
          <Outer key={name} name={name} />
        ))}
      </header>
    </div>
  );
}

export default App;
