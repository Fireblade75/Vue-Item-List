import C from 'constants'

export function increaseHomeScore () {
  return {
    type: C.INCREASE_HOME_SCORE,
    payload: 1
  }
}

export function increaseOutScore () {
  return {
    type: C.INCREASE_HOME_SCORE,
    payload: 1
  }
}

export function clearScores () {
  return {
    type: C.CLEAR_SCORES
  }
}