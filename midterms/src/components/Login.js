import "./Login.css";
import { useEffect, useState } from "react";

const users = [
  {
    username: "admin1",
    password: "123456",
  },
  {
    username: "admin2",
    password: "654321",
  },
];

export default function Login() {

    

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form>
            <h1 className="header">Login</h1>
            <div className="login">
              <input type="text" placeholder="Email" required></input>
            </div>
            <div className="password">
              <input type="password" placeholder="Password" required></input>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
