import { useEffect, useState } from 'react';
import Bookshelf from '../components/Bookshelf';

import * as BooksAPI from '../services/BooksAPI'

const BooksPage = ({onShowSearchPage}) => {

  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
  const [wantToReadBooks, setWantToReadBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
      .then(books => {
        const currentlyReading = [];
        const wantToRead = [];
        const read = [];
        for (let i = 0; i < books.length; i++) {
          switch (books[i].shelf) {
            case 'currentlyReading':
              currentlyReading.push(books[i]);
              break;
            case 'wantToRead':
              wantToRead.push(books[i]);
              break;
            case 'read':
              read.push(books[i]);
              break;
            default:
              break;
          }
        }

        setCurrentlyReadingBooks(currentlyReading);
        setWantToReadBooks(wantToRead);
        setReadBooks(read);
      });
  }, [])

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf shelfName="Currently Reading" books={currentlyReadingBooks}/>
          <Bookshelf shelfName="Want To Read" books={wantToReadBooks}/>
          <Bookshelf shelfName="Read" books={readBooks}/>
        </div>
      </div>
      <div className="open-search">
        <button onClick={onShowSearchPage}>Add a book</button>
      </div>
    </div>
  );

};

export default BooksPage;