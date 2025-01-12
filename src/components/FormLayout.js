import React from 'react';

function FormLayout({ title, children }) {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default FormLayout;
