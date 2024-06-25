// src/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ sections, onSectionClick }) => {
  return (
    <div className="sidebar">
      <h2>API Documentation</h2>
      <ul>
        {sections.map((section, index) => (
          <li key={index} onClick={() => onSectionClick(section.id)}>
            {section.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
