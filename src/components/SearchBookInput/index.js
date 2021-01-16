import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import * as rxjs from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import useQuery from '../../hooks/useQuery';

const SearchBookInput = ({
  onSearchTermChange
}) => {

  let inputSubscription = useMemo(() => new rxjs.Subject(), []);
  const queryParams = useQuery();
  const [searchTerm, setSearchTerm] = useState(queryParams.get('searchTerm'));

  const updateLocalSearchTerm = useCallback((event) => {

    const localSearchTerm = event.target.value;
    setSearchTerm(localSearchTerm);
    inputSubscription.next(localSearchTerm);

  }, [inputSubscription, setSearchTerm]);

  useEffect(() => {

    inputSubscription
      .pipe(
        debounceTime(800)
      ).subscribe(
        currSearchTerm => onSearchTermChange(currSearchTerm)
      );
    return () => inputSubscription.unsubscribe();

  }, [onSearchTermChange, inputSubscription]);

  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search">Close</Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={updateLocalSearchTerm}
          />
      </div>
    </div>
  );

};

SearchBookInput.propTypes = {
  onSearchTermChange: PropTypes.func.isRequired
};

export default SearchBookInput;