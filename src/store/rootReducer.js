import { combineReducers } from 'redux';

import AddProfileReducer from '../components/Profile/AddProfile/AddProfileReducer';

const rootReducer = combineReducers({
  ...AddProfileReducer
});

export default rootReducer;