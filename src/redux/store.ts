import { configureStore } from '@reduxjs/toolkit';
import taskSlice, { TaskState } from './taskSlice';
import { mockCategories } from '../data/mock-data';

const store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
  preloadedState: {
    tasks: {
      categories: mockCategories,
    } as TaskState, // Type assertion
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
