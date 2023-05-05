import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useUserContext } from "../contexts/UserContext";

function Login() {
  const [loginUser, setLoginUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username: loginUser });
    navigate("/my-profile");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Nom d'utilisateur
          <input
            type="text"
            value={loginUser}
            onChange={(e) => setLoginUser(e.target.value)}
          />
        </label>
        <label>
          Mot de passe
          <input
            type="password"
            value={passwordUser}
            onChange={(e) => setPasswordUser(e.target.value)}
          />
        </label>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
