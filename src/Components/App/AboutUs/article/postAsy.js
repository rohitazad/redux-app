import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getData } from "../../../../Redux/Actions/index";
import ListGroup from "react-bootstrap/ListGroup";

class PostAsyComp extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    console.log(this.props.articles);
    return (
      <Fragment>
        {this.props.articles.map(article => {
          return (
            <ListGroup.Item key={article.id} className="todo-item-sec">
              {article.title}
            </ListGroup.Item>
          );
        })}
      </Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}
export default connect(
  mapStateToProps,
  { getData }
)(PostAsyComp);
