import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { profileReducer } from '../components/Profile/re-ducks';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  profiles: profileReducer
});

export default rootReducer;