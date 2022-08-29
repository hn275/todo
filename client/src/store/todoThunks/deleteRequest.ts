import { SERVER_URL } from 'assets/constants';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const deleteRequest = createAsyncThunk(
  'deleteTodo',
  async (ids: string[]) => {
    const response = await axios.delete(SERVER_URL, { data: ids });
    return response.data;
  }
);
