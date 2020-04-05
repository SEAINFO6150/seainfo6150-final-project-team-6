import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedForm: null
    };
  }

  onSubmit = async e => {
    e.preventDefault();
    const data = new FormData(e.target);
    this.setState({ submittedForm: data });
  };

  render() {
    return this.state.submittedForm ? (
      <div>Your form entry was {this.state.submittedForm.get("myText")}</div>
    ) : (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="myText" />
        <input type="submit" value="Send it" />
      </form>
    );
  }
}
