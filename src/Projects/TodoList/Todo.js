import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={
        todo.isComplete
          ? " m-2 h-full bg-gradient-to-r from-red-500 to-black text-white w-full p-4 rounded-xl line-through opacity-90 "
          : " m-2 h-full border-red-500 border-2 text-black w-full p-4 rounded-xl "
      }
      key={index}
    >
      <div
        className="flex items-center justify-between w-full h-full"
        onClick={() => completeTodo(todo.id)}
      >
        <div key={todo.id}>{todo.text}</div>
        <div className="flex">
          <RiCloseCircleLine
            className="w-10"
            size="32"
            onClick={() => removeTodo(todo.id)}
          />
          <TiEdit
            className="w-10"
            size="32"
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          />
        </div>
      </div>
    </div>
  ));
};

export default Todo;
