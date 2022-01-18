import {createAction} from '@reduxjs/toolkit';

import {UPDATE_ENTITIES} from './actions';
import {Collections} from "./types";

export const updateEntities = createAction<Collections>(UPDATE_ENTITIES);
