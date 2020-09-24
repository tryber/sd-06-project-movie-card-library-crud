import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div>
      <p className="spinner"></p>
      <p className="spinner-text">Carregando...</p>
      </div>
    );
  }
}

export default Loading;
