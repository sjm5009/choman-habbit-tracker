import React from 'react';
import './app.css';

function Note() {
  const name = 'Choman';
  return (
    <React.Fragment>{/* <></> */}
      <h1>Hello {name}:)!</h1>
      {['💛', '🎈'].map(item => 
        <h1>{item}</h1>
      )} {/* 코드 블럭을 이용해서 스크립트 사용 가능 */}
    </React.Fragment>
  );
}

export default Note;
