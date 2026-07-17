import React from 'react';
import './NewsItem.css';

function NewsItem({ icon, text, link = '#' }) {
  return (
    <div className="news-item">
      <span className="news-item__icon">{icon}</span>
      <span className="news-item__text">{text}</span>
      <a href={link} className="news-item__link">Подробнее →</a>
    </div>
  );
}

export default NewsItem;