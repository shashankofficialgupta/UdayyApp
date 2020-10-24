import React, { Component } from "react";
import View from "../View/View";
import Header from "../Header/Header";
import "./MainPage.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewOne: "",
      viewTwo: "",
    };
  }
  viewOneHandler = (view1) => {
    this.setState({ viewOne: view1 });
  };
  viewTwoHandler = (view2) => {
    this.setState({ viewTwo: view2 });
  };
  render() {
    let username = localStorage.getItem("Username");
    return (
      <React.Fragment>
        <Header
          username={username}
          clickHandler1={this.viewOneHandler}
          clickHandler2={this.viewTwoHandler}
        />
        <View viewOne={this.state.viewOne} viewTwo={this.state.viewTwo} />
      </React.Fragment>
    );
  }
}

export default MainPage;
