import React, { Component } from "react";
import AboutPage from "../AboutPage/AboutPage";

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
      <div>Your form entry was
        <p>{this.state.submittedForm.get("name")}</p>
        <p>{this.state.submittedForm.get("email")}</p>
        <p>{this.state.submittedForm.get("tel")}</p>
      </div>
    ) : (
      <form onSubmit={this.onSubmit}>
        <p>Name : <input type="text" name="name"/><br/>
        Email : <input type="email" name="email"/><br/>
        SMS Text : <input type="tel" id="tel" name="tel"/></p>
        <p>
          Choose recipe type you like most : <br/>
          <input type="radio" name="recipeType" value="Soup"/> Soup
          <input type="radio" name="recipeType" value="Appetizer"/> Appetizer
          <input type="radio" name="recipeType" value="MainCourse"/>Main Course
          <input type="radio" name="recipeType" value="Snack"/> Snack
          <input type="radio" name="recipeType" value="Dessert"/> Dessert
        </p>
        <p>
          How can we reach you best ?
          <select id="type" name="type">
          <option>Email</option>
          <option>SMS</option>
        </select></p>
        <p>
          Language prefer :
          <select id="language" name="language">
            <option>English</option>
            <option>Spanish</option>
            <option>Chinese</option>
            <option>French</option>
            <option>Russian</option>
            <option>Arabic</option>
          </select></p>
            <p><input type="submit" value="Send it" /></p>
      </form>
    );
  }
}
