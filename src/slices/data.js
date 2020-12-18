import { ofType } from 'redux-observable';

import { from, of } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sources: {},
};

const slice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchData: () => {},
    fetchDataFulfilled: (state, action) => {
      state.sources = action.payload.sources;
    },
    fetchDataRejected: () => {},
    fetchDataCancelled: () => initialState,
  },
});

export const { fetchData, fetchDataFulfilled, fetchDataRejected, fetchDataCancelled } = slice.actions;

export default slice.reducer;

const mockFetchApi = () =>
  from(
    new Promise((resolve) => {
      setTimeout(() => resolve({ data: 'content' }), 1000);
    }),
  );

export const epics = {
  fetchData: (action$, state$, action) => {
    return mockFetchApi().pipe(
      map((sources) => fetchDataFulfilled({ sources })),
      catchError((error) => of(fetchDataRejected(error))),
      takeUntil(action$.pipe(ofType(fetchDataCancelled.type))),
    );
  },
};
