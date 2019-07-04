import React from "react";
import { connect } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ArticlesList = articles => {
  console.log(articles.articles);
  const callArticleStory =
    articles.articles.length > 0
      ? articles.articles.map(article => {
          return (
            <ListGroup.Item
              key={article.id}
              className={`todo-item-sec ${
                article.state === "FOUND_BAD_WORD" ? "lineThrow" : ""
              }`}
            >
              {article.title}
            </ListGroup.Item>
          );
        })
      : "not finding any article";
  return <React.Fragment>{callArticleStory}</React.Fragment>;
};

const List = connect(mapStateToProps)(ArticlesList);
export default List;
