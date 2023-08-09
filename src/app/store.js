import { configureStore } from '@reduxjs/toolkit';
import { itemReduce } from '../features/cardflow/reducer';
// import {counter} from '../features/cardflow/reducer'

export const store = configureStore({
  reducer: itemReduce,
});


