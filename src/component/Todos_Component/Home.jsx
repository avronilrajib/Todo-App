import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import style from "./home.module.css";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [todos, setTodo] = useState([]);

  const findTodoData = (todo) => {
    setTodo((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), todo }];
    });
  };

  const removeTodo = (id) => {
    setTodo((prevTodos) => {
      const filterTodo = prevTodos.filter((todo) => todo.id !== id);
      return filterTodo;
    });
  };
  return (
    <div className={style.container}>
      <h1 className={style.headerTag}>Todo App</h1>
      <NewTodo onTodo={findTodoData} />
      <Todos todos={todos} remove={removeTodo} />
    </div>
  );
}
