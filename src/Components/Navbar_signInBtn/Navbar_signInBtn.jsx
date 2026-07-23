import React from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

import SignIn_btn_clicked from "../../functions/signIn_btn_clicked";
import HandleSignOut from "../../functions/handleSignOut";
import HandleDeleteAcc from "../../functions/HandleDeleteAcc";

import "./Navbar_signInBtn.css";

function Navbar_signInBtn() {
  const navigate = useNavigate();

  //get user status
  const { user, loading } = useAuth();
  if (loading) {
    return null;
  }

  // async function handleLogin() {
  //   const user = await SignIn_btn_clicked();

  //   if (user && !user.email.endsWith("@kiit.ac.in")) {
  //     alert("Only KIIT email addresses are allowed.");
  //     //   await HandleSignOut();
  //     await HandleDeleteAcc();
  //     return;
  //   }

  //   navigate("/");
  // }

  return (
    <div>
      {user ? (
        <div className="user-info">
          <img
            src={user.photoURL}
            alt="Profile"
            className="profileImg"
            onClick={() => {
              HandleSignOut();
              navigate("/");
            }}
          />
          <span>{user.displayName}</span>
        </div>
      ) : (
        <button hidden className="navbar-signIn-btn">
          Get Started
        </button>
      )}
    </div>
  );
}

export default Navbar_signInBtn;
