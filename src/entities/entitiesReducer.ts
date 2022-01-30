import {createReducer} from "@reduxjs/toolkit";
import {UPDATE_ENTITIES} from "./actions";
import * as Immutable from 'immutable';

const initialState = {};

export const entitiesReducer = createReducer(initialState, {
  [UPDATE_ENTITIES]: (state, {payload}) => Immutable.mergeDeep(state, payload),
});
