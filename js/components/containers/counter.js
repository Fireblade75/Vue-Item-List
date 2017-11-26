import React from 'react';
import {connect} from 'react-redux';
import Counter from '../counter';
import {increaseHomeScore, increaseOutScore, clearScores} from '../../state/actions'

const mapStateToProps = state => {
  return {
    homeScore: state.homeScore,
    outScore: state.outScore,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addHomeScore() {
      dispatch(
        increaseHomeScore(1)
      );
    },
    addOutScore() {
      dispatch(
        increaseOutScore(1)
      );
    },
    clearScores() {
      dispatch(
        clearScores()
      );
    }
  }
} 
  
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
