import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleAuth = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuth);
  };

  const githubAuth = new GithubAuthProvider();
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubAuth);
  };

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      setUser(currentUser);

      if (currentUser) {
        axios.post("https://assignment-server-teal.vercel.app/jwt", loggedUser, { withCredentials: true }).then((res) => {
          console.log(res.data);
        });
      } else {
        axios
          .post("https://assignment-server-teal.vercel.app/logout", loggedUser, { withCredentials: true })
          .then((res) => console.log(res.data));
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const info = { user, googleLogin, githubLogin, register, login, logout, loading, setLoading };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.any,
};
