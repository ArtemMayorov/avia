import { combineReducers } from 'redux';
import ticketsReducer from './ticketsReducer';
import sortReducer from './sortReduser';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  ticketsReducer,
  sortReducer,
  filterReducer,
});
export default rootReducer;
