import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './slices/todoSlice';

const todoStore = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default todoStore;
export type StoreRootState = ReturnType<typeof todoStore.getState>;
export type StoreDispatch = typeof todoStore.dispatch;
