import PropTypes from 'prop-types';

const SearchBook = ({
  onReturnPage,
  searchTerm,
  onSearchTermChange
}) => {

  const changeSearchTerm = (event) => {

    const newSearchTerm = event.target.value;
    onSearchTermChange(newSearchTerm);

  };

  return (
    <div className="search-books-bar">
      <button className="close-search" onClick={onReturnPage}>Close</button>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search by title or author"
          onChange={changeSearchTerm}
          />
      </div>
    </div>
  );

};

SearchBook.propTypes = {
  onReturnPage: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired
};

export default SearchBook;