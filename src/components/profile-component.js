import React, { useEffect, useState } from "react";
import AuthService from "../services/auth.service";

const ProfileComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && <div>You must login first to see your profile.</div>}

      {currentUser && (
        <div>
          <h1>In profile page.</h1>
          <h2>Welcome, {currentUser.user.role}</h2>
          <header className="jumbotron">
            <h3>
              <strong>Hi, {currentUser.user.username}</strong>
            </h3>
            <p>
              <strong>Token:{currentUser.token}</strong>
            </p>
            <p>
              <strong>ID:{currentUser.user._id}</strong>
            </p>
            <p>
              <strong>Email:{currentUser.user.email}</strong>
            </p>
          </header>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
