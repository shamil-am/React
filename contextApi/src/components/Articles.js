import React from "react";
import { useContext } from "react";
import { ArticleContext } from "../context/articleContext";

function Articles() {
  let { articles } = useContext(ArticleContext);
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id} style={{background: "teal"}}>
          <h4>{article.title}</h4>
          <h6>{article.body}</h6>
        </div>
      ))}
    </div>
  );
}

export default Articles;
