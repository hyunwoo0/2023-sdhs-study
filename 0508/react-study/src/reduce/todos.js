import { createSlice } from "@reduxjs/toolkit";

//reducer
const todosSlice = createSlice({
  //reducer name
  name: todos,
  //reducer의 초기값
  initialState: [],
  //reducer의 action들
  reducers: {
    createTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
    deleteSelectedTodos: (state, action) => {},
  },
});

export const { createTodo, deleteTodo, deleteSelectedTodos } =
  todosSlice.actions;
export default todosSlice.reducer;
