import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Header = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-base-100 px-12">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Magna</a>
        </div>
        <div className="flex-none gap-4">
          <p>{user.displayName  }</p>
          <Link to='/'>Home</Link>
          <Link to='registration'>Registration</Link>
          <Link to='login'>Login</Link>
          <Link to='about'>About</Link>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
