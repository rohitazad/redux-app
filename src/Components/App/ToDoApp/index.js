import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddToDoComp from "./AddToDo";
import ToDoListingComp from "./ToDoListing";

class ToDoAppComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [
        { id: 1, text: "Create new header menu", status: "all" },
        { id: 2, text: "Footer text color change", status: "all" },
        { id: 3, text: "Create todo functionality", status: "comp" },
        { id: 4, text: "Header logo change", status: "comp" },
        {
          id: 5,
          text: "Link text color should be red",
          status: "close"
        }
      ],
      toDoText: ""
    };
  }
  todoAddHandler = e => {
    e.preventDefault();
    //console.log(e, e.target.todotext.value);
    if (this.state.toDoText !== "") {
      let newTodId = this.state.todolist.length + 1;
      this.setState({
        todolist: [
          ...this.state.todolist,
          {
            text: this.state.toDoText,
            id: newTodId,
            status: "all"
          }
        ],
        toDoText: ""
      });
    } else {
      alert("please add some text in todo box input");
    }
  };
  onChangeHandler = e => {
    //console.log(e);
    this.setState({
      toDoText: e.target.value
    });
  };
  clickToDoHandler = toDoId => {
    console.log(toDoId);
  };
  onChangeTodoListHandler = (id, status) => {
    console.log("parent top lever base ", id, status);
    const allTodoList = this.state.todolist;
    allTodoList.map(todo => {
      if (todo.id === id) {
        todo.status = status;
      }
      return todo;
    });
    this.setState({
      todolist: [...allTodoList]
    });
  };
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <hr />
              <AddToDoComp
                toDoText={this.state.toDoText}
                keyDownHandler={this.onChangeHandler}
                onSubmit={this.todoAddHandler}
              />
              <hr />
            </Col>
            <Col className="mT20">
              <ToDoListingComp
                todoList={this.state.todolist}
                clickToDoHandler={this.clickToDoHandler}
                onChangeTodoList={this.onChangeTodoListHandler}
              />
            </Col>
          </Row>
          <Row />
        </Container>
      </React.Fragment>
    );
  }
}
export default ToDoAppComp;
