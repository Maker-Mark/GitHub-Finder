import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import PropTypes from 'prop-types';

//Just destructure the props we know we are getting
const Search = ({showClear, clearUsers, setAlert }) => {
  //Simply initialize the context.
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');
  //Change the state of the input
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      console.log(githubContext.searchUsers(text)); //Search with the given text

      setText(''); //Then reset the text to be back to blank
    }
  };
  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placerholder="Search Users.."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>{' '}
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};
export default Search;
