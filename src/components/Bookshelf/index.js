import PropTypes from 'prop-types';

import Book from '../Book';

const Bookshelf = ({
  shelfTitle,
  shelfName,
  books,
  onChangeShelf
}) => {

  const changeBookOfShelf = (bookId, newShelf) => {
    const bookToMove = books.find(book => book.id === bookId);
    bookToMove.shelf = newShelf;
    onChangeShelf(shelfName, newShelf, bookToMove)
  };

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book
                id={book.id}
                title={book.title}
                authors={book.authors}
                imageLinks={book.imageLinks}
                shelf={book.shelf}
                onChangeShelf={changeBookOfShelf}
                />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );

};

Bookshelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  shelfName: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired
      }).isRequired,
      shelf: PropTypes.string
    }).isRequired
  ).isRequired,
};

export default Bookshelf;