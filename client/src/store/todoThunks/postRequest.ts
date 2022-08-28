import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SERVER_URL } from 'assets/constants';

interface NewTodo {
  todo: string;
}

export const handlePostRequest = createAsyncThunk(
  'postNewTodo',
  async (newTodo: NewTodo, thunkAPI) => {
    const response = await axios.post(SERVER_URL, { data: newTodo });
    return response.data;
  }
);
