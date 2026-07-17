import React from 'react';
import LinkItem from '../LinkItem/LinkItem';
import './Column.css';

function Column({ title, links }) {
  return (
    <div className="column">
      <h3 className="column__title">{title}</h3>
      <ul className="column__list">
        {links.map((link, idx) => (
          <LinkItem key={idx} icon={link.icon} text={link.text} link={link.link} />
        ))}
      </ul>
    </div>
  );
}

export default Column;