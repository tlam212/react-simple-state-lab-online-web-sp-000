import React, { Component } from 'react';

export default class Matrix extends Component {
  
  genRow = (vals) => (
    <Cell value={val} />
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
        
      </div>
    )
  }
  
}
