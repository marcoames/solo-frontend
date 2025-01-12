import React from 'react';

function Button({ type = 'button', children }) {
  return (
    <button
      type={type}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}

export default Button;
