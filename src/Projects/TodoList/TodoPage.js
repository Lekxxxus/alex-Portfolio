import React from "react";
import TodoList from "./TodoList";

function TodoPage() {
  return (
    <div className="w-full h-screen mx-auto ">
      <h1 className="mt-2 text-3xl font-semibold text-center">
        Sample Todo List.
      </h1>
      <div className="h-full m-4 bg-black border-2 border-gray-500">
        <TodoList />
      </div>
    </div>
  );
}

export default TodoPage;
