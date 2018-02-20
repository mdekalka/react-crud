import { combineReducers } from 'redux';

import AddProfileReducer from '../components/Profile/AddProfile/AddProfileReducer';
import { profileReducer } from '../components/Profile/re-ducks';

const rootReducer = combineReducers({
  ...AddProfileReducer,
  profiles: profileReducer
});

export default rootReducer;