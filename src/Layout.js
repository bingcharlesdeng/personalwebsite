import React from 'react';
import './layout.css'; // Import the CSS file for styling

export default function Layout({ children }) {
  return (
    <div className="layout">
      {children}
    </div>
  );
}