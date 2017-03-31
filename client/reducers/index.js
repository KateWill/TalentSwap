import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import remember from './remember';
import flash from './flash';

const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  remember,
  flash
});

export default rootReducer;
