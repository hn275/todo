import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { StoreRootState, StoreDispatch } from 'store/store';

export const useTodoDispatch: () => StoreDispatch = useDispatch;
export const useTodoSelector: TypedUseSelectorHook<StoreRootState> =
  useSelector;
