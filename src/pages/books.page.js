import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from '../components/Bookshelf';

import * as BooksAPI from '../services/BooksAPI'

const BooksPage = ({onShowSearchPage}) => {

  const [shelfs, setShelfBooks] = useState({
    currentlyReading: [],
    wantToRead: [],
    read: []
  });

  const changeShelf = (prevShelf, newShelf, bookToMove) => {
    setShelfBooks(prevShelfBooks => {
        return {
          ...prevShelfBooks,
          [prevShelf]: prevShelfBooks[prevShelf].filter(book => book.id !== bookToMove.id),
          [newShelf]: [...prevShelfBooks[newShelf], bookToMove]
        };
    });
  };

  useEffect(() => {

    BooksAPI.getAll()
      .then(
        books => {
          const newShelfs = {
            currentlyReading: [],
            wantToRead: [],
            read: [],
            none: []
          };
          for (let i = 0; i < books.length; i++) {
            newShelfs[books[i].shelf].push(books[i]);
          }
          setShelfBooks(newShelfs);
        }
      );

  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            shelfTitle="Currently Reading"
            shelfName="currentlyReading"
            books={shelfs.currentlyReading}
            onChangeShelf={changeShelf}
            />
          <Bookshelf
            shelfTitle="Want To Read"
            shelfName="wantToRead"
            books={shelfs.wantToRead}
            onChangeShelf={changeShelf}
            />
          <Bookshelf
            shelfTitle="Read"
            shelfName="read"
            books={shelfs.read}
            onChangeShelf={changeShelf}
            />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search?searchTerm=">Add a book</Link>
      </div>
    </div>
  );

};

export default BooksPage;