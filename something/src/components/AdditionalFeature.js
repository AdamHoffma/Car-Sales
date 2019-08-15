import React from 'react';
import {addFeature} from '../Actions'

class AdditionalFeature extends React.Component  {
  constructor(props) {
    super(props)
  
  console.log("add", props)
}
  
    addingFeature = e => {
    e.preventDefault()
    this.props.addFeature(this.props.feature)
    
  }
  
  render() {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={this.props.addingFeature} className="button">Add</button>
      {this.props.feature.name} (+{this.props.feature.price})
    </li>
  );
};
}



export default AdditionalFeature
