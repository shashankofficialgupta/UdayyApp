import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view1: "",
      view2: "",
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }
  handleChange1(e) {
    this.setState({ [e.target.name]: e.target.value, view1: e.target.value });
  }
  handleChange2(e) {
    this.setState({ [e.target.name]: e.target.value, view2: e.target.value });
  }
  logoutHandler() {
    localStorage.clear();
  }
  render() {
    return (
      <>
        <Navbar className="Nav" expand="lg">
          <Navbar.Brand style={{ color: "black" }}>
            <span>{this.props.username}</span>
          </Navbar.Brand>
          <Nav className="mr-auto" id="tbtn">
            <Form.Group className="formHeader">
              <Form.Control
                type="text"
                placeholder="View 1"
                name="view1"
                value={this.state.view1}
                onChange={this.handleChange1}
                className="ta1"
              />
              <i
                className="fa fa-arrow-right one"
                style={{ fontSize: "20px", cursor:"pointer" }}
                onClick={() => {
                  this.props.clickHandler1(this.state.view1);
                }}
              ></i>
            </Form.Group>
            <Form.Group className="formHeader">
              <Form.Control
                type="text"
                placeholder="View 2"
                name="view2"
                value={this.state.view2}
                onChange={this.handleChange2}
                className="ta1"
              />
              <i
                className="fa fa-arrow-right two"
                style={{ fontSize: "20px", cursor:"pointer" }}
                onClick={() => {
                  this.props.clickHandler2(this.state.view2);
                }}
              ></i>
            </Form.Group>
            <Link to="/">
              <span style={{ color: "black" }} className="logoutSpan" onClick={this.logoutHandler}>
                Logout
              </span>
            </Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}
export default Header;
