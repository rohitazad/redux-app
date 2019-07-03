import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const HeaderComp = () => {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              to="/"
              activeClassName="active"
              exact={true}
              className="nav-link"
            >
              Home
            </NavLink>

            <NavLink to="/about" activeClassName="active" className="nav-link">
              About
            </NavLink>
            <NavLink to="/4040" activeClassName="active" className="nav-link">
              4040404
            </NavLink>
            <NavLink
              to="/simple-couter-app"
              activeClassName="active"
              className="nav-link"
            >
              Simple Couter App
            </NavLink>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavLink to="/todo" activeClassName="active" className="nav-link">
              To-Do App
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default HeaderComp;
