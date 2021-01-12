import PropTypes from 'prop-types';

import Book from '../Book';

const Bookshelf = ({
  shelfName,
  books,
}) => {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
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
                />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );

};

Bookshelf.propTypes = {
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
  ).isRequired
};

export default Bookshelf;