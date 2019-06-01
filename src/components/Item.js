import React from "react";
import './item.css';

// Return List Item

const Item = ({ todo, index, handleRemoveClick, handleItemClick }) => (
    <li> 
        <span
        className={todo.isCompleted ? "strike-Through" : ""}
        onClick={() => handleItemClick(index)}
        >
         <i class="fa fa-thumb-tack" aria-hidden="true"></i>{" "}{" "}{todo.text}
        </span>
        <span
        className="remove-item-cross"
        onClick={() => handleRemoveClick(index)}
        >  
        <i  id="delete-button" class="fa fa-trash w3-text-blue"></i>
        </span>
    </li>
);
export default Item;
