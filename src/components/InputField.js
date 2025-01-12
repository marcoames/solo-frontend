import React from 'react';

function InputField({ label, id, type, placeholder, ...rest }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label htmlFor={id} style={{ display: 'block', marginBottom: '5px' }}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        {...rest}
      />
    </div>
  );
}

export default InputField;
