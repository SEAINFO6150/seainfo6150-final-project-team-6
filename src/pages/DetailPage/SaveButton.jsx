import React from "react";
import styles from "./SaveButton.module.css";

class SaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
    alert("Saved in your collection successfully!");
  }

  render() {
    return (
      <button className={styles.recipeSaveButton} onClick={this.handleClick}>
        {this.state.isToggleOn ? "Save in Your Collection" : "Saved"}
      </button>
    );
  }
}

export default SaveButton;
