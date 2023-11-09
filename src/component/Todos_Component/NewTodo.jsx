import React, { useState } from "react";
import style from "./newTodo.module.css";
function NewTodo(props) {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;
  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    props.onTodo(todo);
    event.preventDefault();
    setTodo({ title: "", desc: "" });
  };

  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style["form-field"]}>
          <label htmlFor="desc">Description: </label>
          <textarea
            type="text"
            name="desc"
            id="desc"
            value={desc}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default NewTodo;
