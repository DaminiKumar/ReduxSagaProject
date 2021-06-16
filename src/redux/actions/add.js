import * as type from '../types';

export function addUser(data) {
  return {
    type: type.ADD_USER_REQUESTED, data
  }
}