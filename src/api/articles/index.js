import axios from 'axios';

const baseUrl = 'https://api.spaceflightnewsapi.net/v3/articles/';

export default async function getNews(query, params) {
  const response = await axios.get(`${baseUrl}${query}`, { params });
  return response;
}
