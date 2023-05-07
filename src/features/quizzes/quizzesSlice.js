import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdForTopic } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    // addQuiz is an action
    addQuiz: (state, action) => {
      /* When payload is received the id property is extracted */
      const { id } = action.payload;
      /* the payload is a quiz object and this line  */
      state.quizzes[id] = action.payload;
    }
  }
});

/* This code exports a function that is wrapped in a thunk. A thunk is just a function that wraps around another function to delay execution of the inner function
Adds a quiz to the 'quizzes' slice and adds that quiz's 'id' to the 'quizIds array of the corresponding topic this the 'topics' slice of the Redux store.
*/
export const addQuizForTopicId = (quiz) => {
  const { topicId, id } = quiz;

  return (dispatch) => {
    /* This action adds the quiz object to the quizzes slice in the redux store */
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    /* This is also an action. This action adds the id property of the quiz object to quizIds array of the topic object in the topics slice in the Redux store */
    dispatch(addQuizIdForTopic({ topicId: topicId, quizId: id }));
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
 /* destructuring the actions object and exporting only add quiz as a named export. Exported like this to only expose this part of the the actions object to other parts of the application. */
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
