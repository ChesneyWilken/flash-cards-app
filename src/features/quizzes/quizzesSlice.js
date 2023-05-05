import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    // addQuiz is an action
    addQuiz: (state, action) => {
      const { id } = action.payload;  /* When payload is received the id property is extracted */
      state.quizzes[id] = action.payload; /* the payload is a quiz object and this line  */
    } 
  }
});

export const { addQuiz } = quizzesSlice.actions; /* destructuring the actions object and exporting only add quiz as a named export. Exported like this to only expose this part of the the actions object to other parts of the application. */
export const selectQuizzes = state => state.quizzes.quizzes;
export default quizzesSlice.reducer;

