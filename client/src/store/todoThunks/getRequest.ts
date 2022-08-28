import { createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER_URL } from 'assets/constants';
import axios from 'axios';

export const handleGetRequest = createAsyncThunk('getAllTodos', async () => {
  const todos = await axios.get(SERVER_URL);
  return todos.data;
});
