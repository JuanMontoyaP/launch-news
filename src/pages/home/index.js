import React, { useState, useEffect } from 'react';

import getNews from '../../api/articles';

import ShowArticle from '../../components/showArticle';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getNews('', { _limit: 10 })
      .then((response) => setArticles(response.data));
  }, []);

  const ListArticles = articles.map((item) => <ShowArticle key={item.id} article={item} />);

  return (
    <>
      <h1>Articles</h1>
      {ListArticles}
    </>
  );
}
