import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: string;
  candidateName: string;
  location: string;
  rating: number;
  contactNumber: string;
  status: 'new' | 'followed' | '';
  picture: string;
  progress: 'rejected' | 'to do' | 'progressing' | 'done';
}

export interface Category {
  id: string;
  name: string;
  type: 'rejected' | '';
  tasks: Task[];
  totalTasks: number;
}

export interface TaskState {
  categories: Category[];
}

const initialState: TaskState = {
  categories: [
    { id: 'applied', name: 'Applied', type: '', tasks: [], totalTasks: 0 },
    {
      id: 'shortlisted',
      name: 'Shortlisted',
      type: '',
      tasks: [],
      totalTasks: 0,
    },
    { id: 'interview', name: 'Interview', type: '', tasks: [], totalTasks: 0 },
  ],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setCategoryTasks: (
      state,
      action: PayloadAction<{ categoryId: string; tasks: Task[] }>
    ) => {
      const category = state.categories.find(
        (cat) => cat.id === action.payload.categoryId
      );
      if (category) {
        category.tasks = action.payload.tasks;
        category.totalTasks = action.payload.tasks.length;
      }
    },
    reorderTasksByRating: (
      state,
      action: PayloadAction<{ categoryId: string }>
    ) => {
      const category = state.categories.find(
        (cat) => cat.id === action.payload.categoryId
      );
      if (category) {
        category.tasks.sort((a, b) => b.rating - a.rating);
      }
    },
  },
});

export const { setCategories, setCategoryTasks, reorderTasksByRating } =
  taskSlice.actions;

export const selectRejectedTasksCount = (
  state: TaskState,
  categoryId: string
) => {
  const category = state.categories.find((cat) => cat.id === categoryId);
  if (category) {
    return category.tasks.filter((task) => task.progress === 'rejected').length;
  }
  return 0;
};

export default taskSlice.reducer;
