import { combineReducers } from 'redux'
import C from './constants'

export const homeScore = (state = 0, action) => {
  switch (action.type) {
    case C.INCREASE_HOME_SCORE:
      return state + action.payload
    case C.CLEAR_SCORES:
      return 0
    default:
      return state;
  }
}

export const outScore = (state = 0, action) => {
  switch (action.type) {
    case C.INCREASE_OUT_SCORE:
      return state + action.payload
    case C.CLEAR_SCORES:
      return 0
    default:
      return state;
  }
}


export default combineReducers({
  homeScore,
  outScore
});