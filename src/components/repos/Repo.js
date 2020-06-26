import React from "react";

const Repo = ({ repo }) => {
  return (
    <h4 className="card">
      <a href={repo.html_url}>{repo.name}</a>
    </h4>
  );
};
export default Repo;
