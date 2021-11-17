import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  const onSm = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset(); // 정석
  };

  console.log("habitAddForm");
  return (
    <form ref={formRef} className="add-form" onSubmit={onSm}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit!"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
/* import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();
  onSm = (event) => {
    event.preventDefault();
    console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    //this.inputRef.current.value = "";
    this.formRef.current.reset(); // 정석
  };
  render() {
    console.log("habbitAddForm");
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSm}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit!"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm; */
