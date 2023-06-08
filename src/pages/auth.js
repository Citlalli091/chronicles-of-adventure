import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import API from "../utils/api";

export default function AuthForm(props) {
  // const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (props.userId > 0) {
      // navigate(`/user/${props.username}`);
    }
  }, [props.userId]);
  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.usage === "Login") {
      API.loginUser({
        username: username,
        password: password
      })
        .then((data) => {
          console.log(data);
          props.setUserId(data.user.id);
          props.setUsername(data.user.username);
          props.setToken(data.token);
          localStorage.setItem("token", data.token);
          // navigate("/");
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
        });
    } else {
      API.createUser({
        username: username,
        password: password
      })
        .then((data) => {
          console.log(data);
          props.setUserId(data.user.id);
          props.setUsername(data.user.username);
          props.setToken(data.token);
          localStorage.setItem("token", data.token);
          // navigate("/");
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
        });
    }
  };
  return (
    <main className="AuthForm">
      {props.userId === -1 ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          <h1>{props.usage}</h1>
          <form onSubmit={handleSubmit}>
            <input
              name="username"
              onChange={handleChange}
              value={username}
              placeholder="username"
            />
            <input
              name="password"
              onChange={handleChange}
              value={password}
              type="password"
            />
            <button>{props.usage}</button>
          </form>
        </div>
      )}
    </main>
  );
}