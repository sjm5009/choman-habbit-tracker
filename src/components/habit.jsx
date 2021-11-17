/* rcc 하고 tab 누르면 기본적인 골격이 만들어짐 */
import React, { PureComponent } from "react";

class Habit extends PureComponent {
  /* state = {
        count: 0
    }; */

  handleIncre = () => {
    /* this.setState({ count : this.state.count + 1 }); */
    this.props.onIncre(this.props.habit);
  };

  handleDecre = () => {
    /* const count = this.state.count - 1;
        this.setState({ count : count < 0 ? 0 : count }); */
    this.props.onDecre(this.props.habit);
  };

  handelDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    console.log(`habit - ${name}`);
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncre}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecre}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handelDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
