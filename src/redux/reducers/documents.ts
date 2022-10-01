import { createSlice } from '@reduxjs/toolkit';

const initDocuments = {
  searchData: {
    page: 1,
  },
};

export const documentsSlice = createSlice({
  name: 'documents',
  initialState: initDocuments,
  reducers: {
    setPage: (state, action) => {
      state.searchData.page = action.payload;
    },
  },
});

export const { setPage } = documentsSlice.actions;

export default documentsSlice.reducer;
