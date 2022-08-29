import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './slices/todoSlice';
import filterReducer from './slices/filterSlice';

const todoStore = configureStore({
  reducer: {
    todo: todoReducer,
    filter: filterReducer,
  },
});

export default todoStore;
export type StoreRootState = ReturnType<typeof todoStore.getState>;
export type StoreDispatch = typeof todoStore.dispatch;
