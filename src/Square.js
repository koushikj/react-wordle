import React from 'react';
import { toast } from 'react-toastify';
import dict from './dict.json';

class Square extends React.Component {

  render() {
    return <input type="text" className="square" size="1" maxLength="1" id={this.props.value} onChange={(i) => this.props.goToNextBox(i)} disabled={this.props.disabledFlag} />;
  }
}

export default Square;

