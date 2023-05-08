import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {}  
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon,
                quizIds: [] // needs to be quizIds
            };
        },
        addQuizIdForTopic: (state, action) => {
            //extract the required id's from the payload            
            const { topicId, quizId } = action.payload;
            /* topicId is used to access the correct topic object in the current state */
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;

/* this could also be given directly to the useSelector hook in Topics.js like this const selectTopic = useSelector((state) => state.topics.topics)*/
export const selectTopics = (state) => state.topics.topics;

/* This is exported and passed to createStore in store.js */
export default topicsSlice.reducer;