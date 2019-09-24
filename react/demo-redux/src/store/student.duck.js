const ADD_STUDENT = "student/ADD_STUDENT";

export const addStudent = student => ({ type: ADD_STUDENT, payload: student });

const initState = {
  student: [{ name: "tung" }, { name: "hoang" }]
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return { ...state, student: [...state.student, action.payload] };
    default:
      return state;
  }
};

export default reducer;
