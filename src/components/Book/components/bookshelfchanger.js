import PropTypes from 'prop-types';

const BookshelfChanger = ({shelf}) => {

  const shelfOptions = [
    {value: 'currentlyReading', text: 'Currently Reading'},
    {value: 'wantToRead', text: 'Want to Read'},
    {value: 'read', text: 'Read'},
    {value: 'none', text: 'None'},
  ]

  return (
    <div className="book-shelf-changer">
      <select defaultValue={shelf}>
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
  shelf: PropTypes.string
};

BookshelfChanger.defaultProps = {
  shelf: 'none'
};

export default BookshelfChanger;