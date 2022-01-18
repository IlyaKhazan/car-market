import {createAction} from '@reduxjs/toolkit';

import {UPDATE_TITLE} from './actions';

export const updateTitle = createAction<string>(UPDATE_TITLE);
