import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const slice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchData: () => {},
    fetchDataFulfilled: () => {},
    fetchDataRejected: () => {},
    fetchDataCancelled: () => initialState,
  },
});

export const { fetchData, fetchDataFulfilled, fetchDataRejected, fetchDataCancelled } = slice.actions;

export default slice.reducer;
