import React from 'react';

const Option = ({ value, children, disabled }) => {
  return (
    <option value={value} disabled={disabled}>
      {children}
    </option>
  );
};

export default Option;