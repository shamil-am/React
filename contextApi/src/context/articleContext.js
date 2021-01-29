import { createContext, useState, useReducer } from "react";
import { articleReducer } from "./articleReducer";
import InitialState from "./InitialState";

//
export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, dispatch] = useReducer(
    articleReducer,
    InitialState.articles
  );

  const addNewArticle = (newArticle) => {
    dispatch({
      type: "ADD_ARTICLE",
      payload: newArticle,
    });
  };

  /////////////
  return (
    <ArticleContext.Provider value={{ articles, addNewArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
