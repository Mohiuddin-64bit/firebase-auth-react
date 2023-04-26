import React, { createContext } from 'react';
export const AuthContext = createContext(null);
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../component/firebase/firebase.config';
const auth = getAuth(app)

const AuthProvider = ({children}) => {

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const authInfo = {
    createUser,
    singIn
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;