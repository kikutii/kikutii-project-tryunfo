import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      value,
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
            value={ value }
            id={ name }
            name={ name }
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
  value: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  dataId: PropTypes.string.isRequired,
};

export default Input;
