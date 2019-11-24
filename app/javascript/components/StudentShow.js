import React from 'react';
import { withRouter } from 'react-router-dom';

class StudentShow extends React.Component {
  render () {
    console.log(this.props)
    return (
      <React.Fragment>
        <h1>StudentShow</h1>
        <h2>{this.props.text} </h2>
        <h2>{this.props.match.path} </h2>

      </React.Fragment>
    )
  }
}

export default withRouter(StudentShow);
