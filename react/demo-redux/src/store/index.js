import { createStore, combineReducers, compose } from "redux";

import student from "./student.duck";
import teacher from "./teacher.duck";

const reducer = combineReducers({
  student,
  teacher
});

export default () => {
  const store = createStore(
    reducer,
    compose(window.devToolsExtension ? window.devToolsExtension() : () => {})
  );
  return store;
};
