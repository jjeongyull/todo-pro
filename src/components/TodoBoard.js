import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({todoList, toggleComplete, deleteItem}) => {
  return (
    <div>
      <h2 className="title">Todo List</h2>
      {todoList.length > 0 ? todoList.map((items, index) => <TodoItem key={index} items={items} toggleComplete={toggleComplete} deleteItem={deleteItem}/>):<h2>There is no Item to show</h2>}
    </div>
  );
};

export default TodoBoard;
