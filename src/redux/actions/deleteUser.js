import * as type from '../types';

export const deleteUser = (id) => ({ type: type.DELETE_USERBYID_REQUESTED, id })
