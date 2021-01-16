import React from 'react';
import PropTypes from 'prop-types';

const BookCover = ({bookCoverURL}) => {

  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url("${bookCoverURL}")`
      }}>
    </div>
  );

};

BookCover.propTypes = {
  bookCoverURL: PropTypes.string,
};

BookCover.defaultProps = {
  bookCoverURL: 'https://images-na.ssl-images-amazon.com/images/I/31M3X330W1L._SX295_BO1,204,203,200_.jpg'
}

export default React.memo(BookCover);