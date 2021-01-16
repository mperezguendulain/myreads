import PropTypes from 'prop-types';

import * as BooksAPI from '../../services/BooksAPI';

import BookshelfChanger from "./components/bookshelfchanger"
import BookCover from './components/bookcover';
import BookDescription from './components/bookdescription';

const Book = ({
  id,
  title,
  authors,
  imageLinks,
  shelf
}) => {

  const changeShelf = newShelf => {

    BooksAPI.update(id, newShelf)
      .then();

  };

  return (
    <div className="book">
      <div className="book-top">
        <BookCover bookCoverURL={imageLinks && imageLinks.thumbnail} />
        <BookshelfChanger shelf={shelf} onChangeShelf={changeShelf} />
      </div>
      <BookDescription title={title} authors={authors} />
    </div>
  );

};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  imageLinks: PropTypes.shape({
    thumbnail: PropTypes.string
  }),
  shelf: PropTypes.string
};

export default Book;