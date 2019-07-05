import React from "react";
import List from "./articleList";
import FormArticle from "./articleForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostAsyComp from "./postAsy";

const ArticleAppComp = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <h3>Add a article</h3>
            <FormArticle />
          </Col>
          <Col>
            <h2>Articles</h2>
            <List />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Asy Post Here</h3>
            <PostAsyComp />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ArticleAppComp;
