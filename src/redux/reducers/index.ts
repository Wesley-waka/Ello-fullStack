import { combineReducers } from 'redux';

import bookReducer from './reducer';


const rootReducer = combineReducers({books: bookReducer});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
