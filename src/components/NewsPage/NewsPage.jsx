import React from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import MainNews from '../MainNews/MainNews';
import ColumnsSection from '../ColumnsSection/ColumnsSection';
import './NewsPage.css';

function NewsPage() {
  const mainNews = [
    { icon: '📰', text: 'Новая статья о React', link: '#' },
    { icon: '🚀', text: 'Запуск миссии на Марс', link: '#' },
    { icon: '💻', text: 'Обновление TypeScript', link: '#' },
    { icon: '🎮', text: 'Анонс новой игры от студии X', link: '#' },
  ];

  const columns = [
    {
      title: 'Технологии',
      links: [
        { icon: '📱', text: 'Выход нового iPhone', link: '#' },
        { icon: '💾', text: 'Новый SSD', link: '#' },
        { icon: '🔒', text: 'Кибербезопасность 2026', link: '#' },
      ],
    },
    {
      title: 'Спорт',
      links: [
        { icon: '⚽', text: 'Результаты Лиги Чемпионов', link: '#' },
        { icon: '🏀', text: 'НБА: плей-офф стартует', link: '#' },
        { icon: '🎾', text: 'Уимблдон: расписание матчей', link: '#' },
      ],
    },
    {
      title: 'Культура',
      links: [
        { icon: '🎬', text: 'Премьеры июля в кино', link: '#' },
        { icon: '🎵', text: 'Новые альбомы недели', link: '#' },
        { icon: '📚', text: 'Книжные бестселлеры', link: '#' },
      ],
    },
  ];

  const handleSearch = (query) => {
    console.log('Поиск:', query);
  };

  return (
    <div className="news-page">
      <Header title="Главная страница" />
      
      <MainNews news={mainNews} />
      
      <SearchBar placeholder="Введите запрос..." onSearch={handleSearch} />
      
      <ColumnsSection columns={columns} />
    </div>
  );
}

export default NewsPage;