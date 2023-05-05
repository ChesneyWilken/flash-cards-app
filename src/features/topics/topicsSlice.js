import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {}  
    },

    reducers:{
        addTopic: (state, action) => {
            const {id, name, icon} = action.payload;
            state.topics[id] = {
                id: id, // this has been destructured. Otherwise it would be id: id.action.payload
                name: name, //this has been destructured. name: name.action.payload
                icon: icon,
                quizId: []
            }
        }
    }
});

export const { addTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
/* this could also be given directly to the useSelector hook in Topics.js like this const selectTopic = useSelector((state) => state.topics.topics)*/
export default topicsSlice.reducer;