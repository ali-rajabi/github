import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { avatar_url, login } }) => {
  return (
    <div className="card text-center">
      <img
        className="round-img"
        src={avatar_url}
        alt=""
        style={{ width: "50px" }}
      />
      <h3>{login}</h3>
      <div className="my-1">
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm">
          More
        </Link>
      </div>
    </div>
  );
};
UserItem.prototypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
