import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default function ShowArticle({ article }) {
  const articleName = article.title;
  const articleImage = article.imageUrl;
  const articleDescription = article.summary;
  const articleUrl = article.url;

  return (
    <div>
      <a href={articleUrl} target="_blank" rel="noreferrer">
        <img className="articleImage" src={articleImage} alt={articleName} />
        <h3 className="articleTitle">{articleName}</h3>
      </a>
      <p className="articleDescription">{articleDescription}</p>
    </div>
  );
}

ShowArticle.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  article: PropTypes.object.isRequired,
};
