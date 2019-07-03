import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

class CounterCompApp extends Component {
  constructor() {
    super();
    this.state = {
      num: 0
    };
  }
  plusHandle = () => {
    this.setState({
      num: this.state.num + 1
    });
  };
  minesHandle = () => {
    this.setState({
      num: this.state.num - 1
    });
  };
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h1>Simple Counter App</h1>
              <Button variant="primary">
                Counter Number is{" "}
                <Badge variant="light">{this.state.num}</Badge>
                <span className="sr-only">unread messages</span>
              </Button>
              <ButtonToolbar role="toolbar" className="mT20">
                <Button variant="primary" onClick={this.plusHandle}>
                  Plus
                </Button>
                <Button variant="danger" onClick={this.minesHandle}>
                  Mines
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default CounterCompApp;
