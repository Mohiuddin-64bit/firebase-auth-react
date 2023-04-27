import React, { createContext, useContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import {createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../component/firebase/firebase.config';
const auth = getAuth(app)

const AuthProvider = ({children}) => {

  const googleProvider = new GoogleAuthProvider();

  const googleSign = () => {
    signInWithPopup(auth, googleProvider);
  }

  const [user, setUser] = useState(null)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
    })
    return () => {
      return unsubscribe;
    }
  }, [])

  
  const authInfo = {
    user,
    createUser,
    singIn,
    logOut,
    googleSign
    
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;