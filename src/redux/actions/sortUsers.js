import * as type from '../types';

export function sortUsers() {
  return {
    type: type.GET_SORTUSERS_REQUESTED,
  }
}