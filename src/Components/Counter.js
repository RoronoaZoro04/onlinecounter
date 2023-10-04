import React, { useState } from "react";
import "./Counter.css";

const Counter = ({ counterNumber, onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const [label, setLabel] = useState(`Counter ${counterNumber}`);
  const [inputDisabled, setInputDisabled] = useState(true);

  const handleIncrement = () => {
    setCount(count + 1);
    setInputValue(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setInputValue(count - 1);
    }
  };

  const handleSetInitialValue = () => {
    const inputValuePrompt = prompt("Enter the new initial value (only numbers):");
    const parsedValue = parseInt(inputValuePrompt);
    
    if (!isNaN(parsedValue)) {
      setCount(parsedValue);
      setInputDisabled(true);
      setInputValue(parsedValue.toString());
    }
  };
  

  const handleReset = () => {
    setCount(0);
    setInputValue(0);
    setInputDisabled(true);
  };

  const handleChangeLabel = () => {
    const newLabel = prompt("Enter a new label:");
    if (newLabel) {
      setLabel(newLabel);
    }
  };

  return (
    <div className="counter-box">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <p className="label">{label}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="0"
        disabled={inputDisabled}
      />
      <div className="counter">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className="controls">
        <button onClick={handleSetInitialValue}>Set Initial Value</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleChangeLabel}>Change Label</button>
      </div>
    </div>
  );
};

export default Counter;
