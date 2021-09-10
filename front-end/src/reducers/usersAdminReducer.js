import { USERS_ACTION } from '../actions/usersAdminAction';

const INITIAL_STATE = {
  users: [],
};

function usersAdminReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USERS_ACTION:
    return { users: action.users };
  default:
    return state;
  }
}

export default usersAdminReducer;
