// import React, {useState} from "react";
import "./myAccount.css";

export const MyAccount = () => {
  return (
    <main id="myaccount">
      <div id="myaccount-container">
        <div id="myaccount-header">
          <h1>Account</h1>
        </div>

        <div id="myaccount-content">
          {/* add image */}
          <form id="myaccount-form">
            <label for="Username">Username</label>
            <br></br>
            <input type="text" placeholder="John Doe"></input>
            <div>
              <br></br>
              <label for="email">Email</label>
              <br></br>
              <input
                type="email"
                placeholder="youremail@mail.com"
                id="email"
                name="email"
              ></input>
            </div>
            <br></br>
            <div>
              <label for="Current Password">Current Password</label>
              <br></br>
              <input type="password"></input>
            </div>
            <br></br>
            <div>
              <label for="New Password"> New Password</label>
              <br></br>
              <input type="password"></input>
            </div>
            <br></br>
            <div>
              <label for="Confirm Password">Confirm Password</label>
              <br></br>
              <input type="text"></input>
              <br></br>
            </div>
            <br></br>
            <button>Delete Account </button>
          </form>
        </div>
      </div>
    </main>
  );
};
