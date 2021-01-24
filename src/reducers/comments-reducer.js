import { FETCH_COMMENTS } from '../types';

import data from '../data';

const INIT_STATE = {
  comments: data()
};
console.log(INIT_STATE);

export const commentsReducer = (state = INIT_STATE.comments, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state
      };
    default:
      return state;
  }
};
