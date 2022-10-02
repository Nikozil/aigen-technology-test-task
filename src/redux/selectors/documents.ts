import { createSelector } from '@reduxjs/toolkit';
import { getApiSearchData } from 'helpers/common-functions';
import { RootState } from 'redux/store';

export const selectSearchData = (state: RootState) =>
  state.documents?.searchData;

export const selectApiSearchData = createSelector(
  selectSearchData,
  getApiSearchData
);
