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
    const postData =
      this.props.articles.length > 0
        ? this.props.articles.map(article => {
            return (
              <ListGroup.Item key={article.id} className="todo-item-sec">
                {article.title}
              </ListGroup.Item>
            );
          })
        : "<div>loading ...</div>";
    return <Fragment>{postData}</Fragment>;
  }
}
function mapStateToProps(state) {
  //debugger;
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}
export default connect(
  mapStateToProps,
  { getData }
)(PostAsyComp);
