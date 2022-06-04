import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import './style.css';

export default function ShowArticle({ article }) {
  const articleName = article.title;
  const articleImage = article.imageUrl;
  const articleDescription = article.summary;
  const articleUrl = article.url;

  return (
    <div>
      <a href={articleUrl} target="_blank" rel="noreferrer">
        <h2>{articleName}</h2>
        <img src={articleImage} alt={articleName} />
      </a>
      <p>{articleDescription}</p>
    </div>
  );
}

ShowArticle.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  article: PropTypes.object.isRequired,
};
