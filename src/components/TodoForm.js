import React, { useState } from "react";


const TodoForm = ({ addToDo }) => {

  
  // Intial state of TODO FORM
    const [value, setValue] = useState("");

 // On Form Submit calls addToDo with value from input textbox
  const onFormSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addToDo(value);
  };

 // On enter/change event value is set to target value of input textbox
  const handleOnChange = event => {
    setValue(event.target.value);
  };

//  Returns TODO FORM 
  return (
    <form className="w3-container" onSubmit={onFormSubmit}>
      <p>
        <input
          type="text"
          className="w3-input"
          placeholder="Enter new task.."
          value={value}
          onChange={handleOnChange}
        />
      </p>
    </form>
  );
};

export default TodoForm;
