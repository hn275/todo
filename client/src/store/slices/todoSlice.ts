import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { handleGetRequest as getRequest } from 'store/todoThunks/getRequest';
import { handlePostRequest as postRequest } from 'store/todoThunks/postRequest';

interface TodoItem {
  id: string;
  content: string;
  isComplete: boolean;
  isActive: boolean;
}

interface TodoList {
  todoList: TodoItem[];
  status?: 'idle' | 'pending' | 'success' | 'error';
}

const initialState: TodoList = {
  todoList: [],
  status: 'idle',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get
      .addCase(getRequest.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(
        getRequest.fulfilled,
        (state, action: PayloadAction<TodoList>) => {
          state.status = 'success';
          state.todoList = action.payload.todoList;
        }
      )
      .addCase(getRequest.rejected, (state) => {
        state.status = 'error';
        const error = new Error('get request failed');
        console.log(error.message);
      })
      // Post
      .addCase(postRequest.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(
        postRequest.fulfilled,
        (state, action: PayloadAction<TodoItem>) => {
          state.status = 'success';
          state.todoList.push(action.payload);
        }
      )
      .addCase(postRequest.rejected, (state) => {
        state.status = 'error';
        console.log('rejected');
      });
  },
});

export type { TodoItem, TodoList };
export default todoSlice.reducer;
