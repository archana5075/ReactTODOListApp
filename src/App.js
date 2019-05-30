import React, { useState } from "react";
import "./App.css";
import NameTag from "./components/nameTag";

const nameInit = ["Archana", "Pushpa", "Deepthi", "peter", "john"];

function App() {
  const [names, setNames] = useState(nameInit);
  const removeName = e => {
    const copyNames = names.filter(val => val !== e.target.name);
    setNames(copyNames);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        {names.map( (name, i) => (
          <NameTag doWhatEver={removeName} key={`${i}${name}`} name={name} />
        ))}
      </header>
    </div>
  );
}

export default App;
