import * as type from '../types';

export function addUser() {
  return {
    type: type.ADD_USER_REQUESTED,
  }
}