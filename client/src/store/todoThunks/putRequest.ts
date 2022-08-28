import { createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER_URL } from 'assets/constants';
import axios from 'axios';

export interface PutTodoRequest {
  id: string;
  isComplete?: boolean;
  isActive?: boolean;
}
export const putRequest = createAsyncThunk(
  'putUpdateTodo',
  async (todo: PutTodoRequest) => {
    try {
      const response = await axios.put(SERVER_URL, {
        data: todo,
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);
