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
      minValue,
      maxValue,
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
            min={ minValue }
            max={ maxValue }
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
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
};

Input.defaultProps = {
  minValue: 1,
  maxValue: 90,
};

export default Input;
