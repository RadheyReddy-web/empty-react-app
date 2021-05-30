import { combineReducers } from 'redux';

import AuthReducer from 'library/common/reducers/AuthReducer';
import DetailsReducer from 'library/common/reducers/DetailsReducer';

export default combineReducers({
  authReducer: AuthReducer,
  details: DetailsReducer,
});
