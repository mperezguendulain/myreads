import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Book from '../Book';

import * as BooksAPI from '../../services/BooksAPI';

const BooksSearchResult = ({ searchTerm }) => {

  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (searchTerm === '') {
      setFilteredBooks([]);
      setLoading(false);
      return;
    }

    BooksAPI.search(searchTerm)
      .then(books => {
        if (!Array.isArray(books)) {
          books = [];
        }
        console.log(books)
        setLoading(false);
        setFilteredBooks(books);
      })
  }, [searchTerm])

  return (
    <div className="search-books-results">
      {
        loading ? (
          <div className="spinner-container">
            <div className="spinner">
            </div>
          </div>
        ) : (
            filteredBooks.length > 0
              ? (
                <ol className="books-grid">
                  {filteredBooks.map(book => (
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
              ) : (
                <div className="not-books-container">
                  <span className="not-books-label">Not books</span>
                </div>
              )
          )
      }
    </div>
  );

};

BooksSearchResult.propTypes = {
  searchTerm: PropTypes.string.isRequired
};

export default BooksSearchResult;