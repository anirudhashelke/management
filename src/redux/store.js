import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice';
import facultyReducer from './facultySlice';
import courseReducer from './courseSlice';

export const store = configureStore({
  reducer: {
    students: studentReducer,
    faculty: facultyReducer,
    courses: courseReducer,
  },
});
