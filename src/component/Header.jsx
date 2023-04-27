import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar bg-base-100 px-12">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Magna</a>
        </div>
        <div className="flex-none gap-4">
          {user ? (
            <div className="flex items-center gap-5">
              <div className="flex items-center">
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img  src={user.photoURL} />
                  </div>
                </div>
                <p className="font-bold ml-4">{user.displayName || user.email}</p>
              </div>
              <button className="btn btn-success" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          ) : (
            <Link to="login">
              <button className="btn btn-success">Log In</button>
            </Link>
          )}
          <Link to="/">Home</Link>
          <Link to="registration">Registration</Link>
          <Link to="login">Login</Link>
          <Link to="about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
