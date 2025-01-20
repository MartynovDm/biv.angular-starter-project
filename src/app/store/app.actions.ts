import { createAction } from '@ngrx/store';

const context = 'AppAction';

export const ClearState = createAction(`[${context}] Clear State`);
