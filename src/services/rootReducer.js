// import movieListReducer from '../MovieList/movieListReducer';
//
// export default combineReducers({
//     movieList: movieListReducer
// });

import { combineReducers } from 'redux';
import { users, visibilityFilter } from '../users/userListReducer';

export default combineReducers({
    users,
    visibilityFilter
});
