import React from 'react';
import {connect} from 'react-redux';
import Counter from '../counter';

const mapStateToProps = state => {
  return {
    homeScore: state.homeScore,
    outScore: state.outScore
  }
}
  
export default connect(mapStateToProps)(Counter);
