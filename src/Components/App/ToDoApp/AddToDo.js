import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddToDoComp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.props.onSubmit}>
          <Form.Group controlId="forTodoText">
            <Form.Label>Enter todo text</Form.Label>
            <Form.Control
              type="text"
              value={this.props.toDoText}
              onChange={this.props.keyDownHandler}
              name="todotext"
              placeholder="Enter text here"
            />
            <Form.Text className="text-muted">
              Todo text enter for tracking in future.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}
export default AddToDoComp;
