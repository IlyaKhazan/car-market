import {createReducer} from "@reduxjs/toolkit";
import {UserCollection} from "./types";

const user = {id: '1', name: 'Valera', surname: 'Igorka'};

const initialState: UserCollection = {user};

export const userReducer = createReducer(initialState, {});
