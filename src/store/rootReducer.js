import { combineReducers } from 'redux';

import AddProfileReducer from '../components/Profile/AddProfileReducer';

const rootReducer = combineReducers({
  ...AddProfileReducer
});

export default rootReducer;