import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  const myStyle = {
    minHeight: "50vh",
    margin: "10px auto",
  };
  return (
    <div className="container text-center " style={myStyle}>
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
              </>
            );
          })}
    </div>
  );
};
