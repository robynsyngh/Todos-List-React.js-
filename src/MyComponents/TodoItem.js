import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div className="text-center">
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button
          className="btn btn-danger btn-sm mb-3"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};
