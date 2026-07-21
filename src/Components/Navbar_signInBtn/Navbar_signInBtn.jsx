import React from "react";
import { useAuth } from "../../AuthContext";

import SignIn_btn_clicked from "../../functions/signIn_btn_clicked";
import HandleSignOut from "../../functions/handleSignOut";

import "./Navbar_signInBtn.css";

function Navbar_signInBtn() {
  //get user status
  const { user, loading } = useAuth();
  if (loading) {
    return null;
  }

  return (
    <div>
      {user ? (
        <div className="user-info">
          <img
            src={user.photoURL}
            alt="Profile"
            className="profileImg"
            onClick={HandleSignOut}
          />
          <span>{user.displayName}</span>
        </div>
      ) : (
        <button onClick={SignIn_btn_clicked} className="navbar-signIn-btn">
          Get Started
        </button>
      )}
    </div>
  );
}

export default Navbar_signInBtn;
