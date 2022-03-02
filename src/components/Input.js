import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      desc,
      name,
      event,
      type,
      dataId,
    } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { desc }
          <input
            id={ name }
            name={ name }
            value={ name }
            onChange={ event }
            type={ type }
            data-testid={ dataId }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  dataId: PropTypes.string.isRequired,
};

export default Input;
