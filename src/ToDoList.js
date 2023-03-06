import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="toDo_style">
        <span
          className="cross"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          x
        </span>
        <li> {props.text} </li>
      </div>
    </>
  );
};

export default ToDoList;
