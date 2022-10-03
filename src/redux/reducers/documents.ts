import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initDocuments = {
  searchData: {
    page: 1,
    name: '',
    id: '',
    sort: undefined,
    order: 'asc',
    date_start: '2022-01-01',
    date_end: '2022-12-30',
  },
};

export const documentsSlice = createSlice({
  name: 'documents',
  initialState: initDocuments,
  reducers: {
    setPage: (state, action) => {
      state.searchData.page = action.payload;
    },
    changeSearchData: (state, action: PayloadAction<searchPayload>) => {
      const { key, value } = action.payload;

      state.searchData = { ...state.searchData, [key]: value };
      state.searchData.page = 1;
    },
  },
});

export const { setPage, changeSearchData } = documentsSlice.actions;

export default documentsSlice.reducer;

export interface searchPayload {
  key: string;
  value: string;
}
