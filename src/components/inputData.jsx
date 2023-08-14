import React from 'react';
import PropTypes from 'prop-types';

const InputData = ({ value, onChange, onKeyDown }) => (
  <div>
    <input className="inputData" type="text" value={value} onChange={onChange} onKeyDown={onKeyDown} />
  </div>
);

InputData.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};
export default InputData;
