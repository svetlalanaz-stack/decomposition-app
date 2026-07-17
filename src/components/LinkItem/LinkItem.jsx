import React from 'react';
import './LinkItem.css';

function LinkItem({ icon, text, link = '#' }) {
  return (
    <li className="link-item">
      <span className="link-item__icon">{icon}</span>
      <a href={link} className="link-item__link">{text}</a>
    </li>
  );
}

export default LinkItem;