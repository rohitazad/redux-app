import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TodoItemComp from "./ToDoItem";

class ToDoListingComp extends React.Component {
  render() {
    //console.log(this.props);
    return (
      <React.Fragment>
        <Tabs defaultActiveKey="allTodo" id="uncontrolled-tab-example">
          <Tab eventKey="allTodo" title="All Todo">
            <TodoItemComp
              todoList={this.props.todoList}
              clickToDoHandler={this.props.clickToDoHandler}
              status="all"
              onChangeTodoList={this.props.onChangeTodoList}
            />
          </Tab>
          <Tab eventKey="compTodo" title="Completed Todo">
            <TodoItemComp
              todoList={this.props.todoList}
              clickToDoHandler={this.props.clickToDoHandler}
              status="comp"
              onChangeTodoList={this.props.onChangeTodoList}
            />
          </Tab>
          <Tab eventKey="closeTodo" title="Close Todo">
            <TodoItemComp
              todoList={this.props.todoList}
              clickToDoHandler={this.props.clickToDoHandler}
              status="close"
              onChangeTodoList={this.props.onChangeTodoList}
            />
          </Tab>
        </Tabs>
      </React.Fragment>
    );
  }
}

export default ToDoListingComp;
