import React from 'react';

import getNews from '../../api/articles';

export default function Home() {
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   getNews('news').then((res) => setNews(res.data));
  // }, [news]);

  // getNews('news').then((res) => console.log(res.data));

  getNews('', { _limit: 2 }).then((res) => console.log(res.data));

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
