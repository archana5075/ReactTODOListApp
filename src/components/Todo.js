import React, { useState, useEffect } from "react";
import Item from "./Item";
import TodoForm from "./TodoForm";

const Todo = () => {
  
  //Define Style for the App Width
  const widthApp = {
    width: "50%",
    marginLeft: "25%"
  };

// ToDoList Array for the initialState
  const initialState = [
    {
      text: "Create TodoList App",
      isCompleted: false
    },
    {
      text: "Prepare for the Angular interview",
      isCompleted: false
    },
    {
      text: "Create React App",
      isCompleted: false
    }
  ];

  const [todos, setToDo] = useState(initialState);
  const [time, setTime] = useState(Date);

   useEffect(()=> {
     let handle = setInterval(()=>{
       setTime(Date)
     },1000)
     return ()=> clearInterval(handle);
   });

  // Function to add new TODO item
  const addToDo = text => {

    //Previous TODO Items + Newly added TODO item
    const newToDos = [...todos, { text: text, isCompleted: false }];
    setToDo(newToDos);
  };

  // Function to StrikeThrough TODO item
  const handleItemClick = index => {
    //Get copy of todos array from state (todos) 
    const newToDos = [...todos];

    // Add Toggle functionality when item is clicked
    newToDos[index].isCompleted = !newToDos[index].isCompleted;

    setToDo(newToDos);
  };

  //Function to Remove ToDO item
  const handleRemoveClick = index => {
    //Get copy of todos array from state (todos)
    const newToDos = [...todos];

    //Remove the clicked item from the todos array
    newToDos.splice(index, 1); // splice(arrayIndex, howmany)

    //Set state with the new array of todos with the updated value
    setToDo(newToDos);
  };

  

  // Returns TODO APP CARD

  return (
    <div cclass="w3-card-4" style={widthApp}>
      <header class="w3-container w3-blue">
        <h1>ToDoList</h1>
        <h6>{time.toLocaleString()}</h6>
      </header>

      <div class="w3-container w3-light-grey">
        <p>
      <TodoForm addToDo={addToDo} />
      <ul class="w3-ul">
        {todos.length
          ? todos.map((item, index) => (
              <Item
                key={`${item.text}-${index}`}
                todo={item}
                index={index}
                handleRemoveClick={handleRemoveClick}
                handleItemClick={handleItemClick}
              />
            ))
          : ""}
      </ul>
      </p>
     </div> 
     <footer class="w3-container w3-blue">
      <h5>@copyright Archana 2019</h5>
    </footer>    
    </div>
  );
};

export default Todo;
