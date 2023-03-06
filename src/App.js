import React, { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);

  const itemEvents = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arr, Index) =>{
        return Index !== id;
      });
    });
};

  return (
    <>
      <div className="main_div">
        <div className="mid_div">
          <div>
            <div className="">
            <h2>To do list</h2>
            </div>
            
            <div className="d-flex justify-content-center mb-2">
              <div className="form-floating me-2">
            <input id="floatingInput" className="form-control me-2 "
              type="text"
              placeholder="Add items"
              value={inputList}
              onChange={itemEvents}
            />
            <label for="floatingInput">Add items</label>
            </div>
            <button className="btn btn-primary" onClick={listOfItems}>
              <span className="plus">+</span>
            </button>
            </div>
            <div className="items">
            <ol className="listItem">
              {items.map((itemVal, index) => {
                return <ToDoList key={index} id={index} onSelect={deleteItems} text={itemVal} />;
              })}
            </ol>
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
