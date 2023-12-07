import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ text: "first message", id: 1 }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const uid = action.payload.id;
      const utext = action.payload.text;

      state.todos = state.todos.map((todo) =>
        todo.id === uid ? { ...todo, text: utext } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
