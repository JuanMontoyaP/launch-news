import React, { useState, useEffect } from 'react';

import getNews from '../../api/articles';

import ShowArticle from '../../components/showArticle';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getNews('', { _limit: 10 })
      .then((response) => setArticles(response.data));
  }, []);

  let article;
  if (articles.length > 0) {
    article = <ShowArticle article={articles[0]} />;
  } else {
    article = <div>Loading...</div>;
  }

  return (
    <>
      <h1>Articles</h1>
      {article}
      {article}
      {article}
      {article}
      {article}
      {article}
    </>
  );
}
