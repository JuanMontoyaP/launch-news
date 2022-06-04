import React, { useState, useEffect } from 'react';

import getNews from '../../api/articles';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getNews('', { _limit: 10 })
      .then((response) => setArticles(response.data));
  }, []);

  const listArticles = [...articles];
  // eslint-disable-next-line no-console
  console.log(listArticles[0]);

  return (
    <>
      <h1>Articles</h1>
      {/* <ul>{listNews}</ul> */}
    </>
  );
}
