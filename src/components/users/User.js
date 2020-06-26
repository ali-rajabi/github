import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    followers,
    following,
    hireable,
    html_url,
    login,
    public_gists,
    public_repos,
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      <span>
        hireable :{" "}
        {hireable ? (
          <i className="fa fa-check text-success"></i>
        ) : (
          <i className="fa fa-times text-danger"></i>
        )}{" "}
      </span>
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            style={{ width: "150px" }}
            alt=""
          />
          <span>{name} </span>
          <span>{location}</span>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio :</h3>
              <p>{bio}</p>
              <a className="btn btn-dark my-1" href={html_url}>
                Visit Github Page
              </a>
              <ul>
                {login && (
                  <li>
                    <span>Login : {login}</span>
                  </li>
                )}
                {company && (
                  <li>
                    <span>Company : {company}</span>
                  </li>
                )}
                {blog && (
                  <li>
                    <span>Website : {blog}</span>
                  </li>
                )}
              </ul>
            </Fragment>
          )}
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers : {followers}</div>
        <div className="badge badge-light">Folloing : {following}</div>
        <div className="badge badge-success">Public Repos : {public_repos}</div>
        <div className="badge badge-dark">Public Gists : {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
