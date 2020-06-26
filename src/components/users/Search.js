import React, { useState, useContext } from "react";

import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text === "") {
      githubContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUser(text);
      setText("");
    }
  };

  const onChangeHandler = (e) => setText(e.target.value);

  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChangeHandler}
          autoComplete="off"
        />
        <input type="submit" className="btn btn-block btn-dark" />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn-block btn btn-light"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
