const ADD_TEACHER = "teacher/ADD_TEACHER";

export const addTeacher = teacher => ({ type: ADD_TEACHER, payload: teacher });

const init = {
  teacher: [{ name: "duc" }, { name: "sinh" }]
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case ADD_TEACHER:
      return { ...state, teacher: [...state.teacher, action.payload] };
    default:
      return state;
  }
};

export default reducer;
