import { FETCH_COMMENTS } from '../types';

export const fetchComments = comments => {
  return {
    type: FETCH_COMMENTS,
    payload: comments
  };
};
