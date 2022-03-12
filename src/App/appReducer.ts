import { createReducer } from "@reduxjs/toolkit"
import * as Immutable from "immutable"

import { UPDATE_TITLE } from "./actions"

const initialState = {
	title: "CarMarket",
}

export const appReducer = createReducer(initialState, {
	[UPDATE_TITLE]: (state, { payload }) => Immutable.set(state, "title", payload),
})
