import { combineEpics as defaultCombineEpics, ofType } from 'redux-observable';

import { flatten, isEmpty } from 'lodash';
import { mergeMap } from 'rxjs/operators';

const toEpic = (actionTypes, epicName, handler) => {
  // for customize epic (if epic is not the action type name)
  if (!actionTypes[epicName]) {
    return handler;
  }

  return (action$, state$) => {
    return action$.pipe(
      ofType(actionTypes[epicName]),
      mergeMap((action) => handler(action$, state$, action)),
    );
  };
};

const sliceToEpics = (slice) => {
  if (!slice || !slice.epics) {
    return [];
  }
  const actionTypes = Object.fromEntries(
    Object.entries(slice)
      .filter(([k]) => k !== 'default' && k !== 'epics')
      .filter(([, v]) => v && v.type)
      .map(([k, v]) => [k, v.type]),
  );

  const epics = [];
  Object.entries(slice.epics).forEach(([epicName, handlers]) => {
    if (Array.isArray(handlers)) {
      handlers.forEach((handler) => {
        epics.push(toEpic(actionTypes, epicName, handler));
      });
    } else {
      epics.push(toEpic(actionTypes, epicName, handlers));
    }
  });

  return epics;
};

const getEpicsFromSlices = (slices) => {
  if (isEmpty(slices)) {
    return [];
  }
  return flatten(slices.map(sliceToEpics));
};

export const combineEpics = (...args) => defaultCombineEpics(...getEpicsFromSlices(args));
