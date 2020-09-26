import React, { Component } from 'react';

class Logo extends Component {
  render() {
    const { imagem } = this.props;
    return (
      <div className="cubo">
        <img src={imagem} alt="girando" width="40" />
        <img src={imagem} alt="com o logo" width="40" />
        <img src={imagem} alt="imagem" width="40" />
        <img src={imagem} alt="do coyote" width="40" />
      </div>
    );
  }
}

export default Logo;
