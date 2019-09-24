import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { addTeacher } from "./store/teacher.duck";
import { addStudent } from "./store/student.duck";

function App({ student, teacher, onAddStudent, onAddTeacher }) {
  console.log(student);
  console.log(teacher);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => onAddStudent({ name: "huy" })}>click</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit<code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default connect(
  ({ student, teacher }) => ({
    student: student.student,
    teacher: teacher.teacher
  }),
  dispatch => ({
    onAddStudent: student => dispatch(addStudent(student)),
    onAddTeacher: teacher => dispatch(addTeacher(teacher))
  })
)(App);
