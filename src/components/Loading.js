import React, { Component } from 'react';

import LoadingImg from '../loading.gif';
import '../css/Loading.css';

class Loading extends Component {
  render() {
    return (
      <img className="loading-img" src={LoadingImg} alt="loading-gif" />
    );
  }
}

export default Loading;
