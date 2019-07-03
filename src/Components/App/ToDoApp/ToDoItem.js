import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

class TodoItemComp extends React.Component {
  onChangeHandler = (e, id) => {
    console.log(e.target.value, id);
    this.props.onChangeTodoList(id, e.target.value);
  };
  render() {
    //console.log("my props", this.props);
    //console.log("my Show to todo list", this.props.status);
    const todoList = this.props.todoList.filter(item => {
      return this.props.status === item.status;
    });
    const selectedValue = this.props.status ? this.props.status : "";
    //console.log("todoList", this.props.todoList);
    //console.log("todoList", todoList);
    return (
      <React.Fragment>
        <div className="mT20">
          {todoList.map(list => {
            return (
              <ListGroup.Item
                key={list.id}
                onClick={() => {
                  this.props.clickToDoHandler(list.id);
                }}
                className="todo-item-sec"
              >
                {list.text}
                <Form.Control
                  onChange={e => {
                    this.onChangeHandler(e, list.id);
                  }}
                  as="select"
                  defaultValue={selectedValue}
                >
                  <option value="all">Reopen</option>
                  <option value="comp">Completed</option>
                  <option value="close">Close</option>
                </Form.Control>
              </ListGroup.Item>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default TodoItemComp;
