import { useCallback } from 'react';
import { useHistory } from "react-router-dom";

import useQuery from '../hooks/useQuery';

import SearchBookInput from '../components/SearchBookInput';
import BooksSearchResult from '../components/BooksSearchResult'


const SearchPage = () => {

  const history = useHistory();
  const queryParams = useQuery();

  const changeSearchTerm = useCallback((newSearchTerm) => {

    history.push(`/search?searchTerm=${newSearchTerm}`);

  }, [history]);

  return (
    <div className="search-books">
      <SearchBookInput
        searchTerm={queryParams.get('searchTerm')}
        onSearchTermChange={changeSearchTerm}
      />
      <BooksSearchResult
        searchTerm={queryParams.get('searchTerm')}/>
    </div>
  );

};

export default SearchPage;