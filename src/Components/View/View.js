import React, { Component } from "react";

class View extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="divMainPage left">
          <object
            type="text/html"
            aria-label="View 1"
            data={this.props.viewOne}
            style={{ overflow: "auto", width: "100%", height: "100%" }}
          ></object>
        </div>
        <div className="divMainPage right">
          <object
            type="text/html"
            aria-label="View 2"
            data={this.props.viewTwo}
            style={{ overflow: "auto", width: "100%", height: "100%" }}
          ></object>
        </div>
      </React.Fragment>
    );
  }
}

export default View;
