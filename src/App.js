import React, { useState } from "react";
import Counter from "./Components/Counter";
import "./App.css";

function App() {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    setCounters([...counters, Date.now()]);
  };

  const closeCounter = (id) => {
    setCounters(counters.filter((counter) => counter !== id));
  };

  return (
    <div className="App">
      <button className="add-button" onClick={addCounter}>
        Add Counter
      </button>
      <div className="counters">
        {counters.map((id, index) => (
          <Counter
            key={id}
            counterNumber={index + 1}
            onClose={() => closeCounter(id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
