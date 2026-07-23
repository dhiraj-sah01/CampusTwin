import { useAuth } from "../AuthContext";
import React from "react";

function GetUser() {
  //get user status
  const { user, loading } = useAuth();
  if (loading) {
    return null;
  }
  return user;
}

export default GetUser;
