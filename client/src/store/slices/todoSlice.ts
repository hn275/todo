import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { handleGetRequest as getRequest } from 'store/todoThunks/getRequest';
import { handlePostRequest as postRequest } from 'store/todoThunks/postRequest';
import { putRequest } from '../todoThunks/putRequest';
import { deleteRequest } from '../todoThunks/deleteRequest';

interface TodoItem {
  id: string;
  content: string;
  isComplete: boolean;
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
      })
      // Put
      .addCase(putRequest.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(
        putRequest.fulfilled,
        (state, action: PayloadAction<TodoItem>) => {
          state.status = 'success';
          const todoIndex = state.todoList.findIndex((todo: TodoItem) => {
            return todo.id === action.payload.id;
          });
          if (todoIndex !== -1) state.todoList[todoIndex] = action.payload;
        }
      )
      .addCase(putRequest.rejected, (state) => {
        state.status = 'error';
        console.log('failed to update todo item');
      })
      .addCase(deleteRequest.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(
        deleteRequest.fulfilled,
        (state, action: PayloadAction<TodoList>) => {
          state.status = 'success';
          state.todoList = action.payload.todoList;
        }
      )
      .addCase(deleteRequest.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export type { TodoItem, TodoList };
export default todoSlice.reducer;
