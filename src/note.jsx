import React from 'react';
import './app.css';

function Note() {
  const name = 'Choman';
  return (
    <React.Fragment>{/* <></> */}
      <h1>Hello {name}:)!</h1>
      {['π', 'π'].map(item => 
        <h1>{item}</h1>
      )} {/* μ½λ λΈλ­μ μ΄μ©ν΄μ μ€ν¬λ¦½νΈ μ¬μ© κ°λ₯ */}
    </React.Fragment>
  );
}

export default Note;
