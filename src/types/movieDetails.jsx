import PropTypes from 'prop-types';

const match = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
  url: PropTypes.string,
  path: PropTypes.string,
  isExact: PropTypes.bool,
};

export default match;
