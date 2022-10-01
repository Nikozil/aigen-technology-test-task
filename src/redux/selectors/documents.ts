import { RootState } from 'redux/store';

export const selectSearchData = (state: RootState) =>
  state.documents?.searchData;
