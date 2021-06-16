import * as type from '../types';
const initialState = {
  users: [],
  loading: false,
  error: null,
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      }
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }


    case type.GET_USERBYID_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_USERBYID_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      }
    case type.GET_USERBYID_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }

    case type.GET_SORTUSERS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_SORTUSERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      }
    case type.GET_SORTUSERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    case type.DELETE_USERBYID_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter(users => users.id !== action.id),
      }

    default:
      return state;

  }
}

