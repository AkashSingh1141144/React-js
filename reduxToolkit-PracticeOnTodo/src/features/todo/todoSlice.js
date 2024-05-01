import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Sandhya Singh",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

	removeTodos: (state, action) => {
		state.todos = state.todos.filter((todo) => todo.id !== action.payload);
	},

	// editeTodo: (state, action) => {
	// 	state.todos = state.todos.map((todo) => 
	// 		todo.id === action.payload.id ? action.payload : todo)
	// }
	
  },
});

export const { addTodos, removeTodos } = todoSlice.actions;

export default todoSlice.reducer;