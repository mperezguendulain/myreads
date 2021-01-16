import React from 'react';
import PropTypes from 'prop-types';

const BookDescription = ({
  title,
  authors
}) => {

  return (
    <>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors.join(', ')}</div>
    </>
  );

};

BookDescription.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
};

BookDescription.defaultProps = {
  authors: []
}

export default React.memo(BookDescription);