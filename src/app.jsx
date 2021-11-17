import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handlerIncre = (habit) => {
    /* const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++; */
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits: habits });
  };

  handleDecre = (habit) => {
    /* const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count; */
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits: habits });
  };

  handelDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    /* 내가 짠 코드
     const habits = [...this.state.habits];
    const id =
      habits.length > 0
        ? habits.reduce((prev, current) =>
            prev.id > current.id ? prev : current
          ).id + 1
        : 0;
    habits.push({ id: id, name: name, count: 0 }); */
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handelReset = () => {
    const habits = this.state.habits.map((habit) => {
      //habit.count = 0;
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    console.log("app");
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncre={this.handlerIncre}
          onDecre={this.handleDecre}
          onDelete={this.handelDelete}
          onAdd={this.handleAdd}
          onReset={this.handelReset}
        />
      </>
    );
  }
}

export default App;
