import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const Profile = () => {
  const user = useOutletContext();
  console.log(user);
  const type = localStorage.getItem("type");
  const handleLogout = () => {
    localStorage.clear();
    window.open("https://loginsystemserver.onrender.com/auth/logout", "_self");
  };

  return (
    <>
      <div className="profile">
        <div className="profilePicture">
          <img src={user.photos[0].value} />
        </div>
        <div className="profile-information">
          <p>
            Username :{" "}
            <span>{type == "github" ? user.username : user.displayName}</span>
          </p>
          {type == "github" ? (
            <p>
              Github : <span>{user.profileUrl}</span>{" "}
            </p>
          ) : (
            <p>
              Email : <span>{user.emails[0].value}</span>{" "}
            </p>
          )}

          <div onClick={handleLogout} className="button">
            <button>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};
