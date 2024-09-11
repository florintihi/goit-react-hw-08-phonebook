import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(_, { payload }) {
      return payload;
    },
  },
});
export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
