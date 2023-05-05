import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import styles from "./Navbar.module.css";

function Navbar() {
  // apply different styles on link if active or not
  const getActiveLinkClassName = ({ isActive }) => {
    return isActive ? styles.active : styles.notActive;
  };

  const { user, disconnectUser } = useUserContext();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <NavLink to="/" className={getActiveLinkClassName}>
            Accueil
          </NavLink>
          <NavLink to="/wilders" className={getActiveLinkClassName}>
            Nos Wilders
          </NavLink>
          {user && (
            <NavLink to="/my-profile" className={getActiveLinkClassName}>
              Mon profil
            </NavLink>
          )}
        </ul>
        <ul>
          {!user ? (
            <NavLink to="/login" className={getActiveLinkClassName}>
              Connexion
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={getActiveLinkClassName}
              onClick={disconnectUser}
            >
              Déconnexion
            </NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
