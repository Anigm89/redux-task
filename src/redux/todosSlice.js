import { createSlice } from '@reduxjs/toolkit';

let taskId = 1;

const todosSlice = createSlice({
    name: 'todos',
    initialState:{
        tasks: []
    },
    reducers: {
        addTask: ( state, action ) => {
            state.tasks.push({
                id: taskId++,
                text: action.payload
            });
        },
        removeTask: ( state, action ) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
    },
});

export const { addTask, removeTask } = todosSlice.actions;
export default todosSlice.reducer;