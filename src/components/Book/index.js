import BookshelfChanger from "./components/bookshelfchanger"
import BookCover from './components/bookcover';
import BookDescription from './components/bookdescription';

const Book = () => {

  return (
    <div className="book">
      <div className="book-top">
        <BookCover />
        <BookshelfChanger />
      </div>
      <BookDescription />
    </div>
  );

};

export default Book;