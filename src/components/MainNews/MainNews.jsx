import React from 'react';
import NewsItem from '../NewsItem/NewsItem';
import './MainNews.css';

function MainNews({ news }) {
  return (
    <div className="main-news">
      <h2 className="main-news__title">📌 Главные новости</h2>
      <div className="main-news__list">
        {news.map((item, index) => (
          <NewsItem
            key={index}
            icon={item.icon}
            text={item.text}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default MainNews;