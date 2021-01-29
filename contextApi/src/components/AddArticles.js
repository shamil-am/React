import React from "react";
import { useState, useContext } from "react";
import { ArticleContext } from "../context/articleContext";

//
function AddArticles() {
  const [newArticle, setNewArticle] = useState({});
  const { addNewArticle } = useContext(ArticleContext);

  const onChangeHandler = (e) => {
    setNewArticle({
      ...newArticle,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNewArticle(newArticle);
    let allInput = document.querySelectorAll(".inputField");
    alert(`${newArticle.title} added!`);
    allInput.forEach((element) => {
      element.value = "";
    });
  };

  return (
    <div style={{ background: "gray" }}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="title"
          onChange={onChangeHandler}
          className="inputField"
        />
        <br />
        <input
          type="text"
          name="body"
          onChange={onChangeHandler}
          className="inputField"
        />
        <br />
        <button>add</button>
      </form>
    </div>
  );
}

export default AddArticles;
