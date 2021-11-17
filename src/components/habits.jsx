import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  handlerIncre = (habit) => {
    this.props.onIncre(habit);
  };

  handleDecre = (habit) => {
    this.props.onDecre(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    console.log("habits");
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul className="habits">
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncre={this.handlerIncre}
              onDecre={this.handleDecre}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;