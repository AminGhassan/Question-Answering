import React from 'react';
import './Essay.css';
import {useTable} from 'react-table';

class Essay extends React.Component {
  constructor(props) {
    super(props);
  }
  tet=()=> {
    this.props.addTextArea(this.refs);
  }
  render() {
    return (
      <div>
        <textarea
          ref="question"
          className="essay  shadow-5 br3 tc"
          type="text"
          placeholder="Enter you question"
        />
        <button className="Submit br3 shadow-5 dim">Submit</button>
        <button className="Add br3 shadow-5 dim" onClick={this.tet}>
          Add
        </button>
      </div>
    );
  }
};


export default Essay;