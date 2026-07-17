import React from 'react';
import Column from '../Column/Column';
import './ColumnsSection.css';

function ColumnsSection({ columns }) {
  return (
    <div className="columns-section">
      {columns.map((col, idx) => (
        <Column key={idx} title={col.title} links={col.links} />
      ))}
    </div>
  );
}

export default ColumnsSection;