import React from 'react';
import {connect} from 'react-redux';
import Counter from '../counter';


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
        setLoginUsername(username)
      );
    },
    addOutScore() {
      dispatch(
        setLoginPassword(password)
      );
    },
    clearScores() {
      dispatch(
        setLoginPassword(password)
      );
    }
  }
} 
  
export default connect(mapStateToProps)(Counter);
