import React from "react";
import "./Login.css";
import { loginUrl } from "../spotify";

// client_id: 519679e7c4da4e6e890f03cdf7c4c098
// https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg

export default function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
