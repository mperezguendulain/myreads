import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const BookshelfChanger = ({shelf, onChangeShelf}) => {

  const shelfOptions = [
    {value: 'currentlyReading', text: 'Currently Reading'},
    {value: 'wantToRead', text: 'Want to Read'},
    {value: 'read', text: 'Read'},
    {value: 'none', text: 'None'},
  ];

  const changeShelf = useCallback(event => {

    onChangeShelf(event.target.value);

  }, [onChangeShelf]);

  return (
    <div className="book-shelf-changer">
      <select defaultValue={shelf} onChange={changeShelf}>
        <option value="move" disabled>Move to...</option>
        {shelfOptions.map(
          (shelfOption, index) => (
            <option
              key={index}
              value={shelfOption.value}>
              {shelfOption.text}
            </option>
          )
        )}
      </select>
    </div>
  );

};

BookshelfChanger.propTypes = {
  shelf: PropTypes.string,
  onChangeShelf: PropTypes.func.isRequired
};

BookshelfChanger.defaultProps = {
  shelf: 'none'
};

export default React.memo(BookshelfChanger);