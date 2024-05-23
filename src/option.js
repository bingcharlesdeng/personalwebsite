import React from 'react';
import "./option.css";
const Option = ({ value, children, disabled }) => {
  return (
    <option value={value} disabled={disabled}>
      {children}
    </option>
  );
};

export default Option;