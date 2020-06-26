import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Alert = () => {
  const githubContext = useContext(GithubContext);
  const { alert } = githubContext;
  if (alert) {
    return (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-exclamation-circle"></i> {alert.msg}
      </div>
    );
  } else {
    return "";
  }
};

export default Alert;
