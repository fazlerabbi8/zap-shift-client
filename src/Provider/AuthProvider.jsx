import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "../Contexts/AuthContext";
import auth from "../firebase/firebase.init";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const registerUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

   // Update name/photo on Firebase user
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };


  const logout = () => {
    setloading(true);
    return signOut(auth);
  };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setloading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const AuthInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    googleLogin,
    setUser,
    setloading,
    logout,
    updateUserProfile,
  };
  return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;
