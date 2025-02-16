import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>; // Show loading while checking auth

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
