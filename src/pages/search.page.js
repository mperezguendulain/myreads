import { useEffect, useState } from 'react';

import SearchBook from '../components/SearchBook';
import Book from '../components/Book';
import * as BooksAPI from '../services/BooksAPI';

const SearchPage = ({ onReturnPage }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredBooks([]);
      return;
    }

    BooksAPI.search(searchTerm)
      .then(books => {
        if (!Array.isArray(books)) {
          books = [];
        }
        console.log(books)
        setFilteredBooks(books);
      })
  }, [searchTerm])

  const changeSearchTerm = (newSearchTerm) => {

    setSearchTerm(newSearchTerm);

  }



  return (
    <div className="search-books">
      <SearchBook
        onReturnPage={onReturnPage}
        searchTerm={searchTerm}
        onSearchTermChange={changeSearchTerm}
      />
      <div className="search-books-results">
        {
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
        }
      </div>
    </div>
  );

};

export default SearchPage;