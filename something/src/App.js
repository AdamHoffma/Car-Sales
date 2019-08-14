import React from 'react';
import {connect} from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { removeFeature, addFeature} from './Actions'

const App = (props) => {
  console.log("state", props)
 

  

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.state.car} />
        <AddedFeatures removeFeature={removeFeature} car={props.state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures addFeature={addFeature} store={props.state.store} />
        <Total /*car={props.state.care} additionalPrice={props.state.additionalPrice} *//>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(
  mapStateToProps, {removeFeature, addFeature}
)(App);
