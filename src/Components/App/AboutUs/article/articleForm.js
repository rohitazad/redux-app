import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addArticle } from "../../../../Redux/Actions/index";
import uuidv1 from "uuid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ArticleFormComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handlerChangeText = e => {
    //const titleValue = e.target.value;
    // this.setState({
    //   title: titleValue
    // });
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  submitForm = e => {
    e.preventDefault();
    const { title } = this.state;
    if (title === "") {
      return alert("Please fill to an article .");
    }
    const id = uuidv1();
    console.log(title, "==", id);
    // let's add a check for forbidden words
    // const forbiddenWords = ["spam", "money", "free"];
    // const foundWord = forbiddenWords.filter(word => title.includes(word));
    // if (foundWord) {
    //   return this.props.titleForbidden();
    // }
    //
    this.props.addArticle({ title, id });
    this.setState({
      title: ""
    });
  };
  render() {
    return (
      <Fragment>
        <Form onSubmit={this.submitForm}>
          <Form.Group htmlFor="title">
            <Form.Label>Enter Article</Form.Label>
            <Form.Control
              onChange={this.handlerChangeText}
              value={this.state.title}
              type="text"
              id="title"
            />
            <Form.Text className="text-muted">
              Enter article no span keywords like ("spam", "money", "free")
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Article
          </Button>
        </Form>
      </Fragment>
    );
  }
}

const FormArticle = connect(
  null,
  mapDispatchToProps
)(ArticleFormComp);
export default FormArticle;
