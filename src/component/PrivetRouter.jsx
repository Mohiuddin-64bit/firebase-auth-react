import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivetRouter = ({children}) => {
  const  location = useLocation()
  console.log(location)
  const navigate = useNavigate(null)
  const {user} = useContext(AuthContext)
  if(user){
    return children;
  }
  return (
    <div>
      <Navigate to='../login' state={{from: location} }></Navigate>
    </div>
  );
};

export default PrivetRouter;