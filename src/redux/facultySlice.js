// redux/facultySlice.js
import { createSlice } from '@reduxjs/toolkit';

const facultySlice = createSlice({
  name: 'faculty',
  initialState: [],
  reducers: {
    addFaculty: (state, action) => {
      state.push(action.payload);
    },
    removeFaculty: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addFaculty, removeFaculty } = facultySlice.actions;
export default facultySlice.reducer;
