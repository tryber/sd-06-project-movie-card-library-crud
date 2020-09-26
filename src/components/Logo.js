import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Logo.propTypes = {imagem: PropTypes.string.isRequired};

export default Logo;
